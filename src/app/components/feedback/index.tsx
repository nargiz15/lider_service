'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './feedback.css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const  Feedback = ({ 
  title = "", 
  services = "/",
  viewAllLink = "/", 
  className = "" 
}) => {

  if (!title || !services || !Array.isArray(services)) {
    return null; 
  }
  

  return (
    <div className={`feedback-section ${className}`}>
      <div className="services-title">
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="services-cards"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="feedback-card">
              <h3>{service.name}</h3>
              <img
                src={service.image}
                alt={service.name}
                className="services-card-img"
              />
              <Link href={service.serviceUrl} className="services-card-btn-container">
                <div className="services-card-btn">
               
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  )
}

export default Feedback