import Link from "next/link";
import React from "react";
import './delivery.css'

const Delivery = () => {
  const Breadcrumb: React.FC = () => {
    return (
      <div className="breadcrumb-container">
        <div className="breadcrumb flex items-center text-sm text-white mb-4">
          <h1 className="banner-title">Çatdırılma</h1>
          <Link href="/" className="flex items-center mr-2 hover:text-blue-200">
            Əsas Səhifə
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Çatdırılma</span>
        </div>
      </div>
    );
  };

  return (
    <div className="delivery-page-wrapper">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-background"></div>
      <div className="relative z-10 bg">
        <Breadcrumb />
        <div className="delivery-container">
          <div className="delivery-block">
            <div className="delivery-content">
              <div className="img-delivery">
                <img src="./delivery.png" alt="delivery" />
              </div>
              <div className="text-delivery">
                <h2>Çatdırılma</h2>
                <p>
                  "Soliton Service" Soliton mağazalar şəbəkəsindən satılan
                  məişət əşyalarının Bakı və Abşeron yarımadasina 72 saat ərzində
                  çatdırılasını təmin edir. <br /> <br />
                  Çatdırılma xidməti həftənin bütün günləri fəaliyyət göstərir.
                  "Soliton Service" əməkdaşları müştərilərlə əlaqə saxlayaraq
                  uyğun zaman ərzində məhsulu ünvana çatdırırlar. Alınan məhsulların
                  qəbulu alıcıların iştirakı ilə tam yoxlanılaraq həyata keçirilir.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-button-container">
          <button className="contact-button">
            <Link href='/'>Əlaqə</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;