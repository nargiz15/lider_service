import MainBrends from "./components/4brends";
import Banner from "./components/banner";
import Brends from "./components/brends";
import Map from "./components/map";
import ServicesSection from "./components/services-section";
import ServiceCarousel  from "./components/ourworks";
import FAQ from "./components/faq";
import Feedback from "./components/feedback";
import Contact from "./components/contact";
import About_Second from "./components/about-second";




export default function Home() {
  const repairServices = [
    {
      id: 1,
      name: "Kondisioner",
      image: "/kondisioner.png",
      serviceUrl: "/kondisioner-temiri",
    },
    {
      id: 2,
      name: "Soyuducu",
      image: "/soyuducu.png",
      serviceUrl: "/soyuducu-temiri",
    },
    {
      id: 3,
      name: "Paltaryuyan",
      image: "/paltaryuyan.png",
      serviceUrl: "/paltaryuyan-temiri",
    },
    {
      id: 4,
      name: "Qabyuyan",
      image: "/qabyuyan.png",
      serviceUrl: "/qabyuyan-temiri",
    },
    {
      id: 5,
      name: "Televizor",
      image: "/tv.png",
      serviceUrl: "/tv-temiri",
    },
    {
      id: 6,
      name: "Elektrik Sobası",
      image: "/elektriksoasi.png",
      serviceUrl: "/elektriksobasi-temiri",
    },
  ];

  const installationServices = [
    {
      id: 1,
      name: "Kondisioner ",
      image: "/kondisioner.png",
      serviceUrl: "/kondisioner-qurasdirma",
    },
    {
      id: 2,
      name: "Soyuducu ",
      image: "/soyuducu.png",
      serviceUrl: "/soyuducu-qurasdirma",
    },
    {
      id: 3,
      name: "Paltaryuyan",
      image: "/paltaryuyan.png",
      serviceUrl: "/paltaryuyan-temiri",
    },
    {
      id: 4,
      name: "Qabyuyan",
      image: "/qabyuyan.png",
      serviceUrl: "/qabyuyan-temiri",
    },
    {
      id: 5,
      name: "Televizor",
      image: "/tv.png",
      serviceUrl: "/tv-temiri",
    },
    {
      id: 6,
      name: "Elektrik Sobası",
      image: "/elektriksoasi.png",
      serviceUrl: "/elektriksobasi-temiri",
    },
    

  ];

  const feedbacks = [
    {
      id: 1,
      image: "/feedback.png",
      serviceUrl: "/",
    },
    {
      id: 2,
      image: "/feedback 2.png",
      serviceUrl: "/",
    },
    {
      id: 3,
      image: "/feedback.png",
      serviceUrl: "/",
    },
    {
      id: 4,
      image: "/feedback.png",
      serviceUrl: "/",
    },
    {
      id: 5,
      image: "/feedback.png",
      serviceUrl: "/",
    },
  ]
  return (
    <>
      <Banner/>
      <Brends/>
      <ServicesSection 
        title="Təmir" 
        services={repairServices} 
        viewAllLink="/temir"
      />
      <ServicesSection 
        title="Quraşdırılma" 
        services={installationServices} 
        viewAllLink="/qurasdirma"
      />
    <MainBrends/>
    <Map/>
    <About_Second/>
    <ServiceCarousel/>
    <FAQ/>
    {/* <Feedback  title="Müştəri rəyləri" 
        services={feedbacks} 
        viewAllLink="/qurasdirma"/> */}
    <Contact/>
   
    </>

  );
}