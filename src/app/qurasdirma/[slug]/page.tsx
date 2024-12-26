"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Check, X } from "lucide-react";
import "./details.css";

interface InstallationService {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  benefits: string[];
  steps: string[];
}



const installationServices: { [key: string]: InstallationService } = {
  kondisioner: {
    id: 1,
    name: "Kondisioner Quraşdırılması",
    image: "/kondisioner.png",
    description: "Professional kondisioner quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  soyuducu: {
    id: 2,
    name: "Soyuducu Quraşdırılması",
    image: "/soyuducu.png",
    description: "Professional soyuducu quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  paltaryuyan: {
    id: 3,
    name: "Paltaryuyan Quraşdırılması",
    image: "/paltaryuyan.png",
    description: "Professional paltaryuyan quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  qabyuyan: {
    id: 4,
    name: "Qabyuyan Quraşdırılması",
    image: "/qabyuyan.png",
    description: "Professional qabyuyan quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  tv: {
    id: 5,
    name: "Televizor Quraşdırılması",
    image: "/tv.png",
    description: "Professional televizor quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  elektriksobasi: {
    id: 6,
    name: "Elektrik Sobası Quraşdırılması",
    image: "/elektriksoasi.png",
    description: "Professional elektrik sobası quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  qazsobasi: {
    id: 7,
    name: "Qaz Sobası Quraşdırılması",
    image: "/qazsobasi.png",
    description: "Professional qaz sobası quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  qazsuqizdirici: {
    id: 8,
    name: "Qaz Su Qızdırıcısı Quraşdırılması",
    image: "/suqizdirici.png",
    description: "Professional qaz su qızdırıcısı quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  aspirator: {
    id: 9,
    name: "Aspirator Quraşdırılması",
    image: "/aspirator.png",
    description: "Professional aspirator quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  peykanteni: {
    id: 10,
    name: "Peyk Anteni Quraşdırılması",
    image: "/peyk.png",
    description: "Professional peyk anteni quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  },
  paltarqurudan: {
    id: 11,
    name: "Paltar Qurudan Quraşdırılması",
    image: "/paltarqurudan.png",
    description: "Professional paltar qurudan quraşdırılması xidməti.",
    price: "50-100 AZN",
    duration: "1-2 saat",
    benefits: ["Düzgün yerləşdirmə", "Tam funksionallıq təminatı"],
    steps: ["Yerin seçilməsi", "Montaj hazırlığı", "Quraşdırma"],
  }
};

export default function InstallationDetailsPage({
    params,
  }: {
    params: { slug: string };
  }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const slug = React.use(Promise.resolve(params.slug));
    const serviceSlug = params.slug
    .toLowerCase()
    .replace(/^\//, '')
    .replace(/\/$/, '');


    const service = installationServices[serviceSlug] || {
        name: "Quraşdırma Xidməti",
        image: "/placeholder.png",
        description: "Seçilmiş xidmət üçün məlumat tapılmadı.",
        price: "Qiymət təyin olunmayıb",
        duration: "Müddət təyin olunmayıb",
        benefits: [],
        steps: [],
  };

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    alert("Sifarişiniz qəbul olundu!");
  };
  return (
    <>
        <div className="breadcrumb-container">
        <div className="breadcrumb flex items-center text-sm text-gray-600 mb-4">
          <h1 className="banner-title">{service.name}</h1>
          <Link href="/" className="flex items-center mr-2 hover:text-blue-600">
            Əsas Səhifə
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Quraşdırma</span>
        </div>
      </div>

      <div className="service-content-wrapper">
        <div className="service-details-container">
          <div className="service-main-info">
            <div className="service-image-section">
              <img
                src={service.image}
                alt={service.name}
                className="service-main-image"
              />
            </div>

            <div className="service-text-info">
              <h2 className="service-main-title">{service.name}</h2>
              <p className="service-main-description">{service.description}</p>

              <div className="service-quick-stats">
                <div className="stat-item">
                  <span className="stat-label">Qiymət:</span>
                  <span className="stat-value">{service.price}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Müddət:</span>
                  <span className="stat-value">{service.duration}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-details-grid">
            <div className="service-details-section">
              <h3 className="section-title">Xidmətin Üstünlükləri</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check size={16} className="benefit-icon" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-details-section">
              <h3 className="section-title">Quraşdırma Prosesi</h3>
              <ol className="steps-list">
                {service.steps.map((step, index) => (
                  <li key={index}>
                    <span className="step-number">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <button className="order-button" onClick={() => setIsModalOpen(true)}>
            Sifarişi Rəsmiləşdir
          </button>
        </div>
      </div>

      {/* Order Modal */}
      {isModalOpen && (
        <div className="order-modal-overlay">
          <div className="order-modal">
            <button
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
            <h2 className="modal-title">Sifarişi Rəsmiləşdir</h2>
            <form onSubmit={handleOrderSubmit} className="order-form">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Adınızı daxil edin"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon Nömrəsi</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+994 XX XXX XX XX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Ünvan</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="Ünvanınızı daxil edin"
                />
              </div>
              <div className="form-group">
                <label htmlFor="additional">Əlavə Qeydlər</label>
                <textarea
                  id="additional"
                  name="additional"
                  placeholder="Əlavə məlumat (istəyə görə)"
                ></textarea>
              </div>
              <button type="submit" className="submit-order-btn">
                Sifarişi Göndər
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}