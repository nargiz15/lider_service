"use client"

import React from 'react'
import './banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const bannerData = [
  {
    image: "./banner 1.jpg",
    title: "Soliton Service",
    second_title: "20 ildir",
    third_title: "xidmətinizdəyik",
   
  },
  {
    image: "../banner 2.jpg", 
    title: "Call Center Mərkəzi",
    second_title: "Həftənin bütün günləri ",
    third_title: "09:30 - 18:00",

  },
  { bg: "./banner 3.jpg",
    image: "./banner 3.jpg",
    title: "Bütün növ məişətəşyalarının",
    second_title: "Quraşdırılması və Təmiri"
  },
  {
    image: "./banner 4.jpg",
    title: "Original ehtiyyat hissələri",
    second_title: "Görülən bütün işlərə",
    third_title: "6 ay zəmanət",
    
  }
];

const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {bannerData.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper">
              <img 
                src={banner.image} 
                alt={`Banner ${index + 1}`} 
                className="banner-image"
              />
              {/* <div className="banner-content">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-subtitle">{banner.second_title}</p>
                <span>{banner.third_title}</span>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner