
import React from 'react'
import { PiFacebookLogo } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import './footer.css'
import Link from 'next/link';



const Footer = () => {

  const phoneNumbers = [
    { label: "", number: "(+994 12) 565-1-565" },
    { label: "", number: "(+994 12) 565-2-565" },
    { label: "", number: "(+994 55) 222-34-19" },
    { label: "", number: "(+994 55) 222-32-46" },
  ];
  return (
    <>
    <div className="footer">
      <div className="logo-side">
      <img src="./logo.svg" alt="logo" />
        <p>"Lider Service" təcrübəli mütəxəssislər və konsultantlar komandasıdır</p>
     
        <PiFacebookLogo /> <PiInstagramLogoLight /> <FaWhatsapp />
      </div>

      <div className="site-map">
        <h2>Saytın xəritəsi</h2>
        <div className="links">
        <Link href="/"> <MdKeyboardDoubleArrowRight />Əsas səhifə</Link>
        <Link href="/temir"> <MdKeyboardDoubleArrowRight />Təmir</Link>
        <Link href="/qurasdirma"> <MdKeyboardDoubleArrowRight />Quraşdırma</Link>
        <Link href="/usta-sifarishi"> <MdKeyboardDoubleArrowRight />Usta sifarişi</Link>
        <Link href="/chatdirilma"> <MdKeyboardDoubleArrowRight />Çatdırılma</Link>
        <Link href="/zemanet"> <MdKeyboardDoubleArrowRight />Zəmanət</Link>
        <Link href="/haqqimizda"> <MdKeyboardDoubleArrowRight />Haqqımızda</Link>
        <Link href="/elaqe"> <MdKeyboardDoubleArrowRight />Əlaqə</Link>
        </div>
      </div>


      <div className="contacts">
        <h2>Əlaqə</h2>
        <div className="phone-adress">
        <div className="phones-links">
            {phoneNumbers.map((item, index) => (
              <div className="icon-number" key={index}>
                <IoCallOutline className="call-icon" />
                <Link href={`tel:${item.number}`}>
                  {item.label} {item.number}
                </Link>
              </div>
            ))}
          </div>
          <div className="adress-mail">
          <div className="icon-text-block">
        <CiLocationOn /> 
        <p>Bakı ş., Şamaxı yolu 15-ci km.</p>
        </div>
        <div className="icon-text-block">
        <CiMail />
        <p>office@solitonservice.com</p>

        </div>
        </div>
     </div>
      </div>
      </div>
  
    </>
  )
}

export default Footer