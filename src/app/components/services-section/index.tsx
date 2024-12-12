'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './repair.css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const ServicesSection = ({ 
  title = "", 
  services = '',
  viewAllLink = "/", 
  className = "" 
}) => {

  if (!title || !services || !Array.isArray(services)) {
    return null; 
  }
  
  return (
    <div className={`services-section ${className}`}>
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
            <div className="service-card group">
      <div className="service-card-content">
        <div className="service-card-icon-wrapper">
        <h3 className="service-card-title">{service.name}</h3>
          <img
            src={service.image}
            alt={service.name}
            className="service-card-icon"
          />
        </div>
      
        <Link href={service.serviceUrl} className="service-card-link">
          <div className="service-card-button">
            <ArrowRight 
              className="text-white group-hover:translate-x-1 transition-transform" 
              size={24} 
            />
          </div>
        </Link>
      </div>
    </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="view-all-container">
        <Link href={viewAllLink} className="view-all-link">
          Hamısına bax
          <ChevronRight size={24} className="view-all-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;