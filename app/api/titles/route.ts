import { NextResponse } from "next/server";

// Fetch all video titles from a YouTube channel
// YouTube Data API v3 - Search API endpoint
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

    // Build Search API URL to fetch all videos from channel
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.searchParams.append('key', API_KEY);
    searchUrl.searchParams.append('channelId', CHANNEL_ID);
    searchUrl.searchParams.append('part', 'snippet');
    searchUrl.searchParams.append('type', 'video');
    searchUrl.searchParams.append('order', 'date');
    searchUrl.searchParams.append('maxResults', '50'); // Max allowed per request
    
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

    // Extract video titles and descriptions
    const videoTitles = searchData.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnailUrl: item.snippet.thumbnails.default?.url,
    }));

    return NextResponse.json({
      videos: videoTitles,
      nextPageToken: searchData.nextPageToken,
      totalResults: searchData.pageInfo.totalResults,
      resultsPerPage: searchData.pageInfo.resultsPerPage,
    });

  } catch (error) {
    console.error('Error fetching YouTube video titles:', error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
