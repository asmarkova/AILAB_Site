import { useState } from 'react';

const YouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube video ID из https://www.youtube.com/watch?v=SNbR5LD-ApM
  const videoId = 'SNbR5LD-ApM';

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="section youtube-video">
      <div className="container">
        <div className="youtube-video-wrapper">
          {!isPlaying ? (
            <div className="youtube-preview" onClick={handlePlay}>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="YouTube Video Preview"
                className="youtube-thumbnail"
              />
              <div className="youtube-play-button">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#8b5cf6" fillOpacity="0.9"/>
                  <path d="M32 26L56 40L32 54V26Z" fill="white"/>
                </svg>
              </div>
            </div>
          ) : (
            <div className="youtube-iframe-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          <div className="youtube-info">
            <h3 className="youtube-title">Смотрите больше на нашем YouTube канале</h3>
            <a
              href="https://www.youtube.com/@AI_panferov"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-channel-link"
            >
              Перейти на канал →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;
