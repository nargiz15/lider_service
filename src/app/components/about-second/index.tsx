import React from 'react'
import './about-second.css'
const About_Second = () => {
  return (
    <div className="about_page_wrapper">
    <div className="about-container">
        <div className="about-img-section">
            <img src="./about.png" alt="about" />
        </div>
        <div className="about-text-section">
            <h2>"Lider Service" haqqında</h2>
            <p>"Lider Service" təcrübəli mutəxəssislər və konsultantlar komandasıdır ki, hər bir texniki problemdə sizə köməklik göstərməyə hazırdılar. Aldığınız malda istənilən nasazlıq olduğunda bizim servis mərkəzi ilə əlaqə saxlaya bilərsiniz. Bizim məhsullarımız davamlıdırlar. Uzun müddətli iş və zəmanət keyfiyyəti bizim vacib meyarlarımızdandır. Bütün məhsullarımız satışa buraxılmamışdan qabaq kompüter testindən keçirilir. Zəmanət müddəti ərzində hər hansı bir detal çatışmamazlığı ilə yaranan problemlər servis tərəfindən pulsuz həll olunur.</p>
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
  )
}

export default About_Second