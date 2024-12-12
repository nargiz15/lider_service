import Link from "next/link";
import "./about.css";
import Map from "../../components/map"; // Adjust path as needed
import React from "react";


const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb flex items-center text-sm text-white mb-4">
        <h1 className="banner-title">Haqqımızda</h1>
        <Link href="/" className="flex items-center mr-2 hover:text-blue-200">
          Əsas Səhifə
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold">Haqqımızda</span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
    <div className="about-page-wrapper">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-background"></div>
      <div className="relative z-10 bg">
        <Breadcrumb /> 
      
        <div className="about-container">
          <div className="about-block">
            <div className="about-content">
              <div className="img-about">
                <img src="./haqqimizda.png" alt="about" />
              </div>
              <div className="text-about">
                <h2>"Lider Service" haqqında</h2>
                <p>
                  "Soliton Service" təcrübəli mutəxəssislər və konsultantlar
                  komandasıdır ki,hər bir texniki problemdə sizə köməklik
                  göstərməyə hazırdılar. Aldığınız malda istənilən nasazlıq
                  olduğunda bizim servis mərkəzi ilə əlaqə saxlaya bilərsiniz.
                  Bizim məhsullarımız davamlıdırlar.Uzun müddətli iş və zəmanət
                  keyfiyyəti bizim vacib meyarlarımızdandır. Bütün məhsullarımız
                  satışa buraxılmamışdan qabaq kompüter testindən keçirilir.
                  Zəmanət müddəti ərzində hər hansı bir detal çatışmamazlığı ilə
                  yaranan problemlər servis tərəfindən pulsuz həll olunur.
                </p>
               <div className="icon-text-block">
                <div className="icon-block">
                  <img src="abouticon.svg" alt="icon" />
                  <div className="first-text">
                    <h4>Ehtiyyat hissələri və aksesuarlar</h4>
                    <p>
                      Bilavasitə servisimiz tərəfindən əldə olunan orijinal
                      detallar tam əminlik yaradır. Çünki, bu detallar alınan
                      məhsula tam uyğundur və istənilən keyfiyyəti təmin edə
                      bilərlər. Lazım olan hissələri əldə etmək üçün servisə
                      müraciət edə bilərsiniz.
                    </p>
                  </div>
                </div>
                <div className="icon-block">
                  <img src="abouticon2.svg" alt="icon" />
                  <div className="first-text">
                    <h4>Zəmanət qüvvəsi</h4>
                    <p>
                      Soliton mağazalar şəbəkəsi öz məhsullarına yüksək
                      keyfiyyət verir və bütün məhsullarına 1 ildən 3 ilədək
                      zəmanət təklif edir. Biz sizə pulsuz çatdırılma və
                      quraşdırılmanı təklif edirik. Çatdırılma həftənin bütün
                      günləri həyata keçirilir.
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <Map/>
      <div className="contact-button-container">
          <button className="contact-button">
            <Link href="/elaqe">Əlaqə</Link>
          </button>
        </div>
    </div>
    </>
  );
};

export default About;
