import Link from 'next/link';
import React from 'react';
import { ArrowRight, Home } from 'lucide-react';
import './installation.css'

interface InstallationService {
  id: number;
  name: string;
  image: string;
  serviceUrl: string;
}

const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb flex items-center text-sm text-gray-600 mb-4">
        <h1 className='banner-title'>Məişət Əşyalarının Quraşdırılması</h1>
        <Link href="/" className="flex items-center mr-2 hover:text-blue-600">
          Əsas Səhifə
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold">Quraşdırma</span>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ service: InstallationService }> = ({ service }) => {
  return (
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
      
        <Link 
   href={`/qurasdirma/${service.serviceUrl}`} 
   className="service-card-link"
 >
  <div className="service-card-button">
    <ArrowRight 
      className="text-white group-hover:translate-x-1 transition-transform" 
      size={24} 
    />
  </div>
</Link>
      </div>
    </div>
  );
};

const Installation: React.FC = () => {
  const repairServices: InstallationService[] = [
    {
      id: 1,
      name: "Kondisioner",
      image: "/kondisioner.png",
      serviceUrl: "/kondisioner/",
    },
    {
      id: 2,
      name: "Soyuducu",
      image: "/soyuducu.png",
      serviceUrl: "/soyuducu",
    },
    {
      id: 3,
      name: "Paltaryuyan",
      image: "/paltaryuyan.png",
      serviceUrl: "/paltaryuyan",
    },
    {
      id: 4,
      name: "Qabyuyan",
      image: "/qabyuyan.png",
      serviceUrl: "/qabyuyan",
    },
    {
      id: 5,
      name: "Televizor",
      image: "/tv.png",
      serviceUrl: "/tv",
    },
    {
      id: 6,
      name: "Elektrik Sobası",
      image: "/elektriksoasi.png",
      serviceUrl: "/elektriksobasi",
    },
    {
      id: 7,
      name: "Qaz Sobası",
      image: "/qazsobasi.png",
      serviceUrl: "/qazsobasi",
    },
    {
      id: 8,
      name: "Qaz Su Qızdırıcısı",
      image: "/suqizdirici.png",
      serviceUrl: "/QazSuQızdırıcısı",
    },
    {
      id: 9,
      name: "Aspirator",
      image: "/aspirator.png",
      serviceUrl: "/aspirator",
    },
    {
      id: 10,
      name: "Peyk Anteni",
      image: "/peyk.png",
      serviceUrl: "/peykanteni",
    },
    {
      id: 11,
      name: "Paltar Qurudan",
      image: "/paltarqurudan.png",
      serviceUrl: "/paltarqurudan",
    }
  ];

  return (
    <div className="repair-services-container">
      <div className="repair-banner">
        <Breadcrumb />
      </div>
      
      <div className="services-grid">
        <div className="services-row top-row">
          {repairServices.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="services-row bottom-row">
          {repairServices.slice(4, 8).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="services-row last-row">
          {repairServices.slice(8).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;