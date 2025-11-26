"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';

interface VideoTitle {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl?: string;
}

export default function TitlesPage() {
  const [allVideos, setAllVideos] = useState<VideoTitle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [totalLoaded, setTotalLoaded] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const videosPerPage = 50;

  // Fetch video titles from the API - recursively loads ALL videos
  const fetchTitles = async (pageToken?: string, accumulatedVideos: VideoTitle[] = []) => {
    try {
      const isLoadingMore = !!pageToken && accumulatedVideos.length > 0;
      const isInitialLoad = !pageToken && accumulatedVideos.length === 0;
      
      if (isLoadingMore && !isInitialLoad) {
        setLoadingMore(true);
      } else if (isInitialLoad) {
        setLoading(true);
      }

      const url = pageToken 
        ? `/api/titles?pageToken=${pageToken}`
        : '/api/titles';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch video titles');
      }

      const data = await response.json();
      
      const allVideos = [...accumulatedVideos, ...data.videos];
      
      // Update UI periodically to show progress (every 50 videos)
      if (isInitialLoad && allVideos.length % 50 === 0) {
        setAllVideos(allVideos);
        setTotalLoaded(allVideos.length);
      }
      
      // Continue fetching if there are more pages (recursively fetch ALL videos)
      if (data.nextPageToken) {
        // Recursively fetch more videos without stopping
        await fetchTitles(data.nextPageToken, allVideos);
        return;
      }

      // Final update with all accumulated videos
      setAllVideos(allVideos);
      setTotalLoaded(allVideos.length);
      setNextPageToken(null);
      setError(null);
      
      // Log all video titles to console
      console.log('=== ALL VIDEO TITLES ===');
      console.log('Total Videos:', allVideos.length);
      const titlesArray = allVideos.map((video, index) => ({
        number: index + 1,
        title: video.title,
        description: video.description?.substring(0, 100) + '...'
      }));
      console.log('All Titles Array:', JSON.stringify(titlesArray, null, 2));
      console.log('=== END OF TITLES ===');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching video titles:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Fetch videos on component mount
  useEffect(() => {
    fetchTitles();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(allVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = allVideos.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-semibold">
              Video Library
            </span>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8" />
          
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2" style={{
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.02em'
          }}>
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">
              All Video Titles
            </span>
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-transparent mx-auto rounded-full mb-6" />
          
          {allVideos.length > 0 && (
            <div className="space-y-2">
              <p className="text-lg text-gray-700 font-normal">
                {loading ? (
                  <>Loading: <span className="font-semibold text-amber-700">{totalLoaded}</span> videos...</>
                ) : (
                  <>Total Videos: <span className="font-semibold text-amber-700">{totalLoaded}</span></>
                )}
              </p>
              {!loading && totalPages > 1 && (
                <p className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages} • Showing {startIndex + 1}-{Math.min(endIndex, allVideos.length)} of {totalLoaded} videos
                </p>
              )}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && allVideos.length === 0 && (
          <div className="flex flex-col justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mb-4"></div>
            <p className="text-gray-600">Loading all video titles from the channel...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a moment for channels with many videos</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-red-800 font-semibold">Error loading video titles</h3>
                <p className="text-red-600 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Titles List */}
        {!loading && !error && currentVideos.length > 0 && (
          <div className="space-y-3">
            {currentVideos.map((video, index) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-sm border border-amber-100 p-5 hover:shadow-md hover:border-amber-300 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  {/* Video Number */}
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-semibold text-sm">
                      {startIndex + index + 1}
                    </div>
                  </div>

                  {/* Thumbnail (if available) */}
                  {video.thumbnailUrl && (
                    <div className="shrink-0">
                      <img 
                        src={video.thumbnailUrl} 
                        alt={video.title}
                        className="w-24 h-18 object-cover rounded"
                      />
                    </div>
                  )}

                  {/* Title and Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                      {video.title}
                    </h3>
                    
                    {video.description && (
                      <p className="text-sm text-gray-600 leading-relaxed mb-2 line-clamp-3">
                        {video.description}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(video.publishedAt)}
                      </span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
                      >
                        Watch on YouTube
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && !error && totalPages > 1 && (
          <div className="mt-8">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-amber-300 text-amber-700 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
              >
                ← Previous
              </button>

              {/* First Page */}
              {getPageNumbers()[0] > 1 && (
                <>
                  <button
                    onClick={() => goToPage(1)}
                    className="px-4 py-2 rounded-lg border border-amber-300 text-amber-700 hover:bg-amber-50 transition-all duration-200"
                  >
                    1
                  </button>
                  {getPageNumbers()[0] > 2 && <span className="text-gray-400">...</span>}
                </>
              )}

              {/* Page Numbers */}
              {getPageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    currentPage === pageNum
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                      : 'border border-amber-300 text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Last Page */}
              {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                <>
                  {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                    <span className="text-gray-400">...</span>
                  )}
                  <button
                    onClick={() => goToPage(totalPages)}
                    className="px-4 py-2 rounded-lg border border-amber-300 text-amber-700 hover:bg-amber-50 transition-all duration-200"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-amber-300 text-amber-700 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
              >
                Next →
              </button>
            </div>

            {/* Page Info */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Jump to page:
              <input
                type="number"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) {
                    goToPage(page);
                  }
                }}
                className="ml-2 w-20 px-3 py-1 border border-amber-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && allVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-600">This channel doesn't have any videos yet.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
