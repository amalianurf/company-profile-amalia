import React, { useState } from 'react'
import Image from 'next/image'

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='slider'>
      <div className='slides'>
        {slides.map((slide, index) => (
          <div key={index} className={`image ${index === currentSlide ? 'active' : ''}`}>
            <Image src={slide.image} alt={`Image ${index + 1}`} />
            <div className="slide-text">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}

        <div className='slide-btn'>
          <a className='prev' onClick={prevSlide}>&#10094;</a>
          <a className='next' onClick={nextSlide}>&#10095;</a>
        </div>

        <div className='slide-bullets'>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`bullet ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider