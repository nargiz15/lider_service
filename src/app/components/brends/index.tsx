"use client";
import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./brends.css";

const Brends = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const brands = [
    { src: "/beko.svg", alt: "Beko" },
    { src: "/blomberg.svg", alt: "Blomberg" },
    { src: "/grundig.svg", alt: "Grundig" },
    { src: "/45 1.svg", alt: "45 1" },
    { src: "/lg.svg", alt: "LG" }
  ];

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  }, []);

  return (
    <div className="brends-container">
      <div className="brends-block">
        <h3>Bütün brendlərin məişət texnikasını təmir edirik!</h3>
      </div>
      
      <div className="swiper-container">
        <Swiper
          ref={swiperRef}
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="brendsSwiper"
          spaceBetween={20}
          slidesPerView={2}
          onSlideChange={handleSlideChange}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          aria-label="Brands Slider"
        >
          {brands.map((brand, index) => (
            <SwiperSlide 
              key={index} 
              role="group" 
              aria-label={`Slide ${index + 1} of ${brands.length}`}
            >
              <div className="brand-slide">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="brand-logo"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div 
          className="mobile-pagination" 
          role="tablist" 
          aria-label="Brand slide navigation"
        >
          {brands.map((_, index) => (
            <span
              key={index}
              role="tab"
              aria-selected={activeSlide === index}
              className={`pagination-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brends;