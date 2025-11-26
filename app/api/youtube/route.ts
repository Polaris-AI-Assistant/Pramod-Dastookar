import { NextResponse } from "next/server";

// YouTube Data API v3 - Search API endpoint
// Documentation: https://developers.google.com/youtube/v3/docs/search/list

// Enable server-side caching for 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageToken = searchParams.get('pageToken') || '';
    
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.CHANNEL_ID;

    if (!API_KEY || !CHANNEL_ID) {
      return NextResponse.json(
        { error: "API key or Channel ID not configured" },
        { status: 500 }
      );
    }

    // Build Search API URL
    // This fetches videos from the specified channel, ordered by date
    // Note: YouTube API maxResults limit is 50 per request, so we'll need multiple requests for 200 videos
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.searchParams.append('part', 'snippet');
    searchUrl.searchParams.append('channelId', CHANNEL_ID);
    searchUrl.searchParams.append('maxResults', '50'); // Max allowed by YouTube API
    searchUrl.searchParams.append('order', 'date');
    searchUrl.searchParams.append('type', 'video');
    searchUrl.searchParams.append('key', API_KEY);
    
    if (pageToken) {
      searchUrl.searchParams.append('pageToken', pageToken);
    }

    // Fetch videos from YouTube Search API
    const searchResponse = await fetch(searchUrl.toString());
    
    if (!searchResponse.ok) {
      const errorData = await searchResponse.json();
      console.error('YouTube API Error:', errorData);
      return NextResponse.json(
        { error: "Failed to fetch videos from YouTube", details: errorData },
        { status: searchResponse.status }
      );
    }

    const searchData = await searchResponse.json();

    console.log(`[YouTube API] Fetched ${searchData.items?.length || 0} videos. NextPageToken: ${searchData.nextPageToken ? 'Yes' : 'No'}`);

    // Extract video IDs from search results
    const videoIds = searchData.items
      .map((item: any) => item.id.videoId)
      .filter(Boolean)
      .join(',');

    // If we have video IDs, fetch detailed information using Videos API
    // This gives us contentDetails (duration), statistics (views, likes), etc.
    let videosData = null;
    if (videoIds) {
      const videosUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
      videosUrl.searchParams.append('part', 'snippet,contentDetails,statistics');
      videosUrl.searchParams.append('id', videoIds);
      videosUrl.searchParams.append('key', API_KEY);

      const videosResponse = await fetch(videosUrl.toString());
      if (videosResponse.ok) {
        videosData = await videosResponse.json();
      }
    }

    // Merge search results with detailed video data
    const enrichedVideos = searchData.items.map((searchItem: any) => {
      const videoId = searchItem.id.videoId;
      const detailedVideo = videosData?.items?.find((v: any) => v.id === videoId);

      return {
        id: videoId,
        title: searchItem.snippet.title,
        description: searchItem.snippet.description,
        thumbnailUrl: searchItem.snippet.thumbnails.high?.url || searchItem.snippet.thumbnails.medium?.url,
        publishedAt: searchItem.snippet.publishedAt,
        videoUrl: `https://www.youtube.com/embed/${videoId}`,
        // Additional data from Videos API
        duration: detailedVideo?.contentDetails?.duration,
        views: detailedVideo?.statistics?.viewCount,
        likes: detailedVideo?.statistics?.likeCount,
        channelTitle: searchItem.snippet.channelTitle,
      };
    });

    return NextResponse.json({
      videos: enrichedVideos,
      nextPageToken: searchData.nextPageToken,
      totalResults: searchData.pageInfo.totalResults,
      resultsPerPage: searchData.pageInfo.resultsPerPage,
    });

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
