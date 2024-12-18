import { useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = () => {
  const slides = [
    "Slide 1: Your trusted partner in healthcare.",
    "Slide 2: Innovative pharmaceutical solution.",
    "Slide 3: Delivering quality & care solution.",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        {/* Slide content */}
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <p>{slide}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className={styles.prevButton} onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

