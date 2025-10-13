import { useState, useEffect, useRef, useCallback } from 'react';

export const useSlider = (totalSlides, autoPlay = false, autoPlayInterval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const pauseAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const resumeAutoPlay = useCallback(() => {
    if (autoPlay && !autoPlayRef.current) {
      autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
    }
  }, [autoPlay, autoPlayInterval, goToNext]);

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, goToNext]);

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay
  };
};
