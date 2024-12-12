import Link from "next/link";
import "./warranty.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import React from "react";

const Warranty = () => {
  const Breadcrumb: React.FC = () => {
    return (
      <div className="breadcrumb-container">
        <div className="breadcrumb flex items-center text-sm text-white mb-4">
          <h1 className="banner-title">Zəmanət</h1>
          <Link href="/" className="flex items-center mr-2 hover:text-blue-200">
            Əsas Səhifə
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Zəmanət</span>
        </div>
      </div>
    );
  };
  return (
    <>
    <div className="warranty-page-wrapper">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-background"></div>
      <div className="relative z-10 bg">
        <Breadcrumb />
        <div className="warranty-container">
          <div className="warranty-block">
            <div className="warranty-content">
              <div className="text-warranty">
                <h2>Zəmanət Şərtləri</h2>
                <h5>
                  HÖRMƏTLİ ALICI ! ZƏMANƏT TALONUNU OXUDUQDAN SONRA İMZALAYIN !
                </h5>
                <p className="info">
                  Aldığınız məhsulun quraşdırılması və istifadəsi üçün
                  mütləq“SOLİTON SERVİCE ” təşkilatına müraciət etməyiniz
                  məsləhət görülür.Əks halda düzgün olmayan quraşdırılmalar sizi
                  pulsuz servis xidmətindən məhrum edə bilər . Servis mərkəzinə
                  müraciət etmədən öncə istifadə qaydalarını oxuyun ! Məişət
                  əşyaları qeyri məişət sahələrində istifadə
                  olunarsa(kafe,restoran və s.) , bu zaman zəmanət qüvvədən
                  düşmüş hesab edilir ! <br /> <br />  <br />  <strong>ZƏMANƏT</strong> – təqdim olunan dövrdə , sıradan
                  çıxmış ehtiyat hissəsinin pulsuz şəkildə yenisi ilə əvəz
                  olunması deməkdir . <br /><br /> <strong>ZƏMANƏT</strong>-- şərtləri ilə satılan məhsullar ,
                  nasazlıq yarandığı halda satış tarixindən 14(on dörd) gün
                  ərzində dəyişdirilə və ya qaytarıla bilər . Bu tarixdən sonra
                  müştəri məhsul dəyişimini tələb edə bilməz . <br /><br /><strong>ZƏMANƏT</strong>— məhsulun
                  satış tarixi günündən başlayır .
                </p>
                <div className="img-delivery">
                  <img src="./zemanet.jpg" alt="warranty" />
                </div>
                <p>
                  Zəmanət müddətində təmir işlərinin Soliton Service
                  məntəqələrində aparılması daha məqsədə uyğundur. <br /> <br /> Zəmanət
                  müddətində servis mərkəzinə , müraciət olunan tarixdən
                  etibarən ən gec 3 (üç) gün ərzində xidmət göstərilir. <br /> <br /> Təmir
                  məqsədi ilə Servis Məntəqəsinə qəbul edilən məhsul 14(on dörd
                  ) iş günü müddətində müştəriyə təhvil verilməlidir . ( İstisna
                  hallar xaric : sifariş olunan ehtiyat hissə gecikərsə ,fors
                  major hallar yaranarsa ) . Əks halda məhsul yenisi ilə əvəz
                  olunur . <br /> <br /> Üç qütblü şəbəkə qoşulması olan məhsullar mütləq ,
                  digər məhsullar vaciblik dərəcəsinə torpaqlama olan şəbəkəyə
                  qoşulmalıdır . Bütün birləşmələr birbaşa və ya bilavasitə
                  qoruyucu avtomat ilə təchiz olunmakıdır . Əks halda məhsula
                  dəyən zərər müştəri hesabına bərpa olunacaq . <br /> <br /> Zəmanət müddəti
                  bitmiş məhsula “Soliton Servis “tərəfindən xidmət göstərilərsə
                  əlavə 6(altı)ay zəmanət verilir.Bunun üçün servis çekini tələb
                  edin! <br /> <br /> Zəmanət talonundakı nömrə silinərsə , cırılarsa və yaxud
                  hər hansı bir yazı dəyişikliyi edilərsə zəmanət etibarsız
                  sayılır . <br /> <br /> İri həcmli avadanlıqları elektrik tənzimləyicisi
                  vasitəsi ilə , qaz ilə işləyən avadanlıqları qaz
                  tənzimləyicisi ilə şəbəkəyə bağlayın !
                </p>
                <div className="warranty-icon">
                  {" "}
                  <FaRegCheckCircle />
                  <span>ZƏMANƏT ŞƏRTLƏRİNƏ AİDDİR !</span>
                </div>
                <p>
                  {" "}
                  İri həcmli məişət texnikalarının
                  (Soyuducu,paltaryuyan,qabyuyan,paltarqurudan,qaz
                  peçləri,soba,bişirmə
                  paneli,aspirator,televizor,dondurucu,sərinləşdirici,elektrikli
                  və qazlı su qızdırıcısı,kombi,kondisioner ) 3(üç) illik
                  zəmanəti . Televizor panellərinin zəmanət müddəti isə 18 (on
                  səkkiz) aydır (BEKO,BLOMBERG,GRUNDİG markalarında).
                </p>
                <ul>
                    <li>Məhsulda yerləşən hissələrin ( istifadə qaydalarına riayət olunduğu , lazımi parametrlərin düzgün təmin edildiyi halda ) sıradan çıxanlarının yenisi ilə əvəz olunması .</li>
                    <li>Təmir məqsədi ilə məhsulun (iri həcmli ) servis məntəqəsinə gətirilməsi və geri qaytarılması .</li>
                    <li>1 (bir) dəfə pulsuz montaj və istifadə qaydalarının izahı .</li>
                    <li>Kiçik həcmli məişət texnikalarının (Kiçik mətbəx əşyaları,kiçik elektronik əşyalar,elektrikli qızdırıcı,fotoaparat və kamera,ütü,tozsoran,xüsusi baxım alətləri) 1(bir) illik zəmanəti . </li>
                </ul>
                <div className="warranty-iconclose">
                  {" "}
                  <IoMdCloseCircleOutline />
                  <span>ZƏMANƏT ŞƏRTLƏRİNƏ AİD  DEYİL !</span>    </div>
                  <ol>
                    <li>İstismar qaydalarına riayət edilməzsə yaranan nasazlıqlar. </li>
                    <li>Mexaniki zədələnmələr .</li>
                    <li>Periodik təmizləmələr (kondisionerlərin yuyulması,yuyucuların nasos və filtrlərinin təmizlənməsi,soyuducuların təmizlənməsi,audio və video başlıqların təmizlənməsi və sair) və tənzimləmə işləri .</li>
                    <li> Məsafədən idarəetmə pultları və akkumlyator batareyaları ,adaptorlar,televizorlarda modul kartlarının qoşulması zamanı yaranan nasazlıqlar.</li>
                    <li>Məhsullarda boya saralmaları və boya atmaları .</li>
                    <li>Şüşə və plastik hissələrin mexaniki zədələnmələri və qırılmaları .</li>
                    <li>Nəmişliyin normadan yuxarı olmasından yaranan paslanma və elektronik nasazlıqlar.</li>
                    <li>Elektrik , su , qaz parametrlərinin normadan kənara çıxması nəticəsində yaranan nasazlıqlar .</li>
                    <li>Məhsulda servis mərkəzinin xəbəri olmadan istehsalçı konstruksiyasının dəyişdirilməsi , kabel sisteminə calaq verilməsi .</li>
                    <li>Kənar şəxslərin müdaxiləsi olarsa.</li>
                    <li>Təbii fəlakət nəticəsində yaranan nasazlıqlar .</li>
                    <li>Məhsulun daxilinə kənar cisimlərin , həşəratların və ya maddələrin düşməsi nəticəsində yaranan nasazlıqlar .</li>
                    <li>Müştərinin təkidi ilə düzgün və istifadəyə uyğun olmayan yerdən quraşdırmalar nəticəsində yaranan nasazlıqlar .</li>
                  </ol>
                  <h4>Hörmətli Alıcı !</h4>
                  <h4>Bizi seçdiyiniz üçün sizə təşəkkür edirik . Hər zaman sizə xidmət göstərmək bizim işimizdir !</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-button-container">
          <button className="contact-button">
            <Link href="/elaqe">Əlaqə</Link>
          </button>
        </div>
        </div>
       
      </div>
    
    </>
  );
};

export default Warranty;
