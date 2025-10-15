import { useState } from 'react';

const YouTubeCarousel = () => {
  const originalVideos = [
    {
      id: 'LmY_UoXU4Bk',
      title: 'AI LAB Video 1',
      thumbnail: 'https://img.youtube.com/vi/LmY_UoXU4Bk/maxresdefault.jpg',
      url: 'https://youtu.be/LmY_UoXU4Bk?si=zTwB8GxkzNDWYJoM'
    },
    {
      id: 'SNbR5LD-ApM',
      title: 'AI LAB Video 2',
      thumbnail: 'https://img.youtube.com/vi/SNbR5LD-ApM/maxresdefault.jpg',
      url: 'https://youtu.be/SNbR5LD-ApM?si=Dh5V-hvenlD5C_Jl'
    },
    {
      id: 'K4yifPchyyI',
      title: 'AI LAB Video 3',
      thumbnail: 'https://img.youtube.com/vi/K4yifPchyyI/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=K4yifPchyyI'
    },
    {
      id: 'HSQUr5qs_Lk',
      title: 'AI LAB Video 4',
      thumbnail: 'https://img.youtube.com/vi/HSQUr5qs_Lk/maxresdefault.jpg',
      url: 'https://youtu.be/HSQUr5qs_Lk?si=-qjJtJmAHMTQ90Us'
    },
    {
      id: 'LXxY1qsOcFM',
      title: 'AI LAB Video 5',
      thumbnail: 'https://img.youtube.com/vi/LXxY1qsOcFM/maxresdefault.jpg',
      url: 'https://youtu.be/LXxY1qsOcFM?si=sjTNQb1GNfMF08JZ'
    },
    {
      id: 'ElKkCqia6dY',
      title: 'AI LAB Video 6',
      thumbnail: 'https://img.youtube.com/vi/ElKkCqia6dY/maxresdefault.jpg',
      url: 'https://youtu.be/ElKkCqia6dY?si=7oB86uaH0R9cz2VL'
    }
  ];

  // Create tripled array for true infinite scrolling
  const videos = [...originalVideos, ...originalVideos, ...originalVideos];

  const [currentIndex, setCurrentIndex] = useState(originalVideos.length);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // When reaching end of second set, jump back to middle set
      if (nextIndex >= originalVideos.length * 2) {
        setTimeout(() => setCurrentIndex(originalVideos.length), 0);
        return nextIndex;
      }
      return nextIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIdx = prevIndex - 1;
      // When reaching start of middle set, jump to end of middle set
      if (prevIdx < originalVideos.length) {
        setTimeout(() => setCurrentIndex(originalVideos.length * 2 - 1), 0);
        return prevIdx;
      }
      return prevIdx;
    });
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const handleVideoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getActiveDotIndex = () => {
    return currentIndex % originalVideos.length;
  };

  return (
    <section className="section youtube-carousel">
      <div className="container">
        <div className="youtube-carousel-wrapper">
          <button
            className="slider-btn slider-btn-prev youtube-carousel-btn-prev"
            onClick={goToPrev}
            aria-label="Previous video"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div
            className="youtube-carousel-track-wrapper"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="youtube-carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {videos.map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  className="youtube-carousel-card"
                  onClick={() => handleVideoClick(video.url)}
                >
                  <div className="youtube-carousel-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="youtube-play-overlay">
                      <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/>
                        <path d="M 45,24 27,14 27,34" fill="#fff"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-btn slider-btn-next youtube-carousel-btn-next"
            onClick={goToNext}
            aria-label="Next video"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="youtube-carousel-dots">
          {originalVideos.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === getActiveDotIndex() ? 'active' : ''}`}
              onClick={() => setCurrentIndex(originalVideos.length + index)}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeCarousel;
