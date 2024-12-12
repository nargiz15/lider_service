"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './services-single.css';
import { usePathname, useRouter } from 'next/navigation';

interface ApplianceService {
  id: string;
  name: string;
  description: string;
  img: any;
  text: string;
  serviceUrl?: string;
}

const applianceServices: ApplianceService[] = [
  {
    id: 'kondisioner',
    name: 'Kondisioner Təmiri',
    description: 'Kondisionerlərin professional təmiri. Soyutma sisteminin tam diaqnostikası və bərpası.',
    text: "Kondisionerlərin sıradan çıxma səbəbləri çoxsaylı ola bilər, lakin bunlardan əsasları bir neçədir. Təmirə ehtiyac bir qayda olaraq istehsal xətası və ya qaydalara riayət olunmadan quraşdırılma nəticəsində ortaya çıxır. Digər məşhur səbəblərə blokun zədələnməsi, düzgün olmayan istismar və soyuducu mayenin (freon qazlarının) sızması aiddir. Bütün bu kimi hallarda nasazlığın aradan qaldırılması ilə mütəxəssis məşğul olmalıdır.Müstəqil surətdə (özbaşına) nöqsanı aradan qaldırmaq üçün cəhd daha ciddi problemlərə gətirib çıxara bilər. Müasir texniki xidmət sonrakı əsaslı təmir zərurətindən xilas olmağa imkan verir. Əgər təmir əsl peşəkarlar tərəfindən aprılırsa, nasazlığın səbəbi müasir diaqnostik avadanlığın köməyilə müəyyən edilir, sonra isə tez və effektiv şəkildə aradan qaldırılır. Bənzər işlərin siyahısında xarici blokun təmizlənməsi, soyuducu mayenin normaya uyğun sistemə vurulması, kompressorun, filtrin, istilik mübadiləsi qurğusunun və s. dəyişdirilməsi ola bilər.  Əgər oxşar nasazlıq sizin kondisionerinizdə baş veribsə,bu halda onun aradan qaldırılmasını uzun müddətə təxirə salmayın və isti havanın sizə əziyyət verməsinə icazə verməyin. Soliton Service şirkətinin mütəxəssisləri çox qısa zaman ərzində sıradan çıxmış kondisionerlərin təmirini həyata keçirəcək. Qeyd edək ki, havanın temperaturu yay vaxtlarında nə qədər istidirsə kondisionerlərin sıradan çıxma halları bir o qədər çox baş verir.Münasib olmayan vaxtda kondisionerin təcili təmirinə ehtiyac olmasın deyə hər bir kondisioner sahibi nasazlığa gətirib çıxaran səbəbləri bilməlidir.",
    img: '/xidmet.png',
     serviceUrl: "kondisioner-temiri"
    
  },
  {
    id: 'paltaryuyan',
    name: 'Paltaryuyan Təmiri',
    description: 'Paltaryuyan maşınların keyfiyyətli təmiri. Bütün növ çamaşır maşınları üçün kompleks xidmət.',
     img: '/xidmet.png',
     text: "",
     serviceUrl: "paltaryuyan-temiri"
  },
  {
    id: 'qabyuyan',
    name: 'Qabyuyan Təmiri',
    description: 'Qabyuyan maşınların diaqnostikası və operativ təmiri. Zəmanətli xidmət.',
    img: '/xidmet.png',
    text: "",
    serviceUrl: "qabyuyan-temiri"
  },
  {
    id: 'soyuducu',
    name: 'Soyuducu Təmiri',
    description: 'Soyuducuların professional təmiri. Soyutma sisteminin tam bərpası.',
    img: '/xidmet.png',
    text: "",
    serviceUrl: "soyuducu-temiri"
  },
  {
    id:  "Televizor",
    name: 'Televizor Təmiri',
    serviceUrl: "/tv-temiri",
    description: 'Soyuducuların professional təmiri. Soyutma sisteminin tam bərpası.',
    img: '/xidmet.png',
    text: "",
  },
  {
    id: "Elektrik Sobası",
    name: "Elektrik Sobası",
    img: "/elektriksoasi.png",
    serviceUrl: "/elektriksobasi-temiri",
    description: 'Soyuducuların professional təmiri. Soyutma sisteminin tam bərpası.',
    text: "",
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<ApplianceService | null>(applianceServices[0]);
  const router = useRouter()
  const pathname = usePathname()


  const changeService = (service: any) => {
    console.log("servoce: ", service)
    router.push(`/xidmetler/${service.serviceUrl}`)
    setSelectedService(service);
  }

  useEffect(() => {
    const pathArray = pathname.split('/')
    console.log("pathArray: ", pathArray)
    const key = applianceServices.find((s: any) => s.serviceUrl === pathArray[2])
    console.log(key)
    if(key) {
        setSelectedService(key)
    }
  }, [])

  return (
    <div className="services-page">
      <header className="page-header">
        <div className="breadcrumb-container">
          <div className="breadcrumb-navigation">
            <Link href="/" className="breadcrumb-home-link">
              Əsas Səhifə
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current-page">
              {selectedService?.name || 'Məişət Texnikalarının Təmiri'}
            </span>
          </div>
        </div>
      </header>

      <main className="page-main-content">
        <div className="services-sidebar">
          {applianceServices.map((service) => (
            <button
              key={service.id}
              onClick={() => changeService(service)}
              className={`service-selector ${selectedService?.id === service.id ? 'service-selector-active' : ''}`}
            >
             
              <span className="service-selector-name">{service.name}</span>
            </button>
          ))}
        </div>

      
          {selectedService && (
             <div className="services-details-container">
             
          
                <h2 className="service-details-title">{selectedService.name}</h2>
          
              <p className="service-details-description">{selectedService.description}</p>
              <img src={selectedService.img} alt="xidmet" />
              <p>{selectedService.text}</p>
              </div>
          
          )}
         
      
      </main>

      {/* <footer className="page-footer">
        <p className="page-footer-copyright">&copy; 2023 Lider Service. Bütün hüquqlar qorunur.</p>
      </footer> */}
    </div>
  );
};

export default ServicesPage;
