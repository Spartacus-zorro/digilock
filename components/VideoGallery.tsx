'use client';

import { useState } from 'react';
import { videoData } from '@/data/data';

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<{ type: 'youtube' | 'local'; id: string | number } | null>(null);

  const openVideo = (type: 'youtube' | 'local', id: string | number) => {
    setSelectedVideo({ type, id });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gray-50 text-black" id="videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {videoData.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {videoData.sectionDescription}
          </p>
        </div>

        {/* YouTube Videos */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-black">YouTube Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoData.youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="cursor-pointer group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-black transition-all shadow-soft"
                onClick={() => openVideo('youtube', video.videoId)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h4 className="text-lg font-semibold text-white">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Videos */}
        {videoData.localVideos.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-black">Project Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoData.localVideos.map((video) => (
                <div
                  key={video.id}
                  className="cursor-pointer group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-black transition-all shadow-soft"
                  onClick={() => openVideo('local', video.id)}
                >
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400 group-hover:text-black transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-lg font-semibold text-white">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-400 transition-colors"
            >
              ×
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                >
                  <source
                    src={videoData.localVideos.find(v => v.id === selectedVideo.id)?.videoPath}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
