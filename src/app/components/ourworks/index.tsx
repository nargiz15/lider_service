import React from 'react';
import './ourworks.css';

const services = [
  
  { 
    img: "servicegroup (2).png" ,
    title: "Paltaryuyan Təmiri" 
  },
  { 
    img: "servicegroup (3).png",
    title: "Soyuducu Təmiri" 
  },

  { 
    img: "service group (5).png",
    title: "Kondisioner Təmiri" 
  },

 
];

const ServiceCarousel = () => {
  return (
    <>
    <div className="ourworks">
    <h2>Gördüyümüz işlər</h2>
    <div className="carousel-container">
      <div className="carousel-track">
        {[...services, ...services].map((service, index) => (
          <div key={index} className="carousel-card">
          <img src={service.img} alt="img" />
            <h3 className="carousel-card-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default ServiceCarousel;