"use client"

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { SlCallEnd } from "react-icons/sl";

import "./header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 
    const phoneNumbers = [
      { label: "", number: "(+994 12) 565-1-565" },
      { label: "", number: "(+994 12) 565-2-565" },
      { label: "", number: "(+994 55) 222-34-19" },
      { label: "", number: "(+994 55) 222-32-46" },
    ];
   
    const singlePhoneNumber = "180";
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setActiveDropdown(null);
  };
  const [showRepair, setShowRepair] = useState(false);
  const [showInstall, setShowInstall] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const repairSubLinks = [
    { label: "Kondisioner Təmiri", href: "/xidmetler" },
    { label: "Soyuducu Təmiri", href: "/" },
    { label: "Paltaryuyan təmiri", href: "/" },
    { label: "Televizor təmiri", href: "/" },
    { label: "Qaz sobası təmiri", href: "/" },
    { label: "Elektrik sobası təmiri", href: "/" }
  ];

  const installSubLinks = [
    { label: "Kondisioner Quraşdırması", href: "/" },
    { label: "Soyuducu Quraşdırması", href: "/" },
    { label: "Paltaryuyan Quraşdırması", href: "/" },
    { label: "Televizor Quraşdırması", href: "/" },
    { label: "Qaz sobası Quraşdırması", href: "/" },
    { label: "Elektrik sobası Quraşdırması", href: "/" }
  ];

  const renderDropdownLinks = (links: { label: string, href: string }[], type: string) => (
    <div 
      className={`dropdown-content ${activeDropdown === type ? 'active' : ''}`}
    >
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.href} 
          onClick={toggleSidebar}
          className="sidebar-sublink"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
    {/* desktop  */}

    <div className="top-header">
        <div className="top-left">
          <Link href="#">Servis məntəqələrimiz</Link>
          <Link href="#">Tez-tez verilən suallar</Link>
        </div>
        <div className="top-right">
          <div className="mail-block">
            <CiMail />
            <Link href="#">office@solitonservice.com</Link>
          </div>
          <div className="social-medias">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      <div className="middle-header">
        <div className="logo">
          <img src="./logo.svg" alt="logo" />
        </div>

        <div className="contact-numbers">
          <div className="phone-links">
            {phoneNumbers.map((item, index) => (
              <div className="icon-number" key={index}>
                <IoCallOutline className="call-icon" />
                <Link href={`tel:${item.number}`}>
                  {item.label} {item.number}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="single-number">
          <Link href={`tel:${singlePhoneNumber}`}>
            <SlCallEnd /> {singlePhoneNumber}
          </Link>
        </div>
      </div>


      <nav>
        <Link href="/">Əsas səhifə</Link>
        
        {/* Təmir Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => setShowRepair(true)}
          onMouseLeave={() => setShowRepair(false)}
        >
          <Link href="/temir">Təmir</Link>
          {showRepair && (
            <div className="dropdown-content">
              <Link href="/xidmetler">Kondisioner Təmiri</Link>
              <Link href="/">Soyuducu Təmiri</Link>
              <Link href="/">Paltaryuyan təmiri</Link>
              <Link href="/">Televizor təmiri</Link>
              <Link href="/"> Qaz sobası təmiri</Link> 
              <Link href="/">Elektrik sobası təmiri</Link>
            </div>
          )}
        </div>

        {/* Quraşdırma Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => setShowInstall(true)}
          onMouseLeave={() => setShowInstall(false)}
        >
          <Link href="/qurasdirma">Quraşdırma</Link>
          {showInstall && (
            <div className="dropdown-content">
              <Link href="/">Kondisioner Quraşdırmaı</Link>
              <Link href="/">Soyuducu Quraşdırması</Link>
              <Link href="/">Paltaryuyan Quraşdırması</Link>
              <Link href="/">Televizor Quraşdırması</Link>
              <Link href="/"> Qaz sobası Quraşdırması</Link> 
              <Link href="/">Elektrik sobası Quraşdırması</Link>
            </div>
          )}
        </div>
        
        <Link href="/usta-sifarishi">Usta sifarişi</Link>
        <Link href="/chatdirilma">Çatdırılma</Link>
        <Link href="/zemanet">Zəmanət</Link>
        <Link href="/haqqimizda">Haqqımızda</Link>
        <Link href="/elaqe">Əlaqə</Link>
      
      
      </nav>





      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-header-content">
          <div className="logo">
            <img src="./logo.svg" alt="logo" />
          </div>
          <div 
            className="burger-menu" 
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-scroll">
          <Link href="/" className="sidebar-link" onClick={toggleSidebar}>
            Əsas səhifə
          </Link>

          <div 
            className="sidebar-dropdown"
            onClick={() => toggleDropdown('repair')}
          >
            <div className="sidebar-link-dropdown">
              <Link href="/temir">Təmir</Link>
              {activeDropdown === 'repair' ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {renderDropdownLinks(repairSubLinks, 'repair')}
          </div>

          <div 
            className="sidebar-dropdown"
            onClick={() => toggleDropdown('install')}
          >
            <div className="sidebar-link-dropdown">
              <Link href="/qurasdirma">Quraşdırma</Link>
              {activeDropdown === 'install' ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {renderDropdownLinks(installSubLinks, 'install')}
          </div>

          <Link href="/usta-sifarishi" className="sidebar-link" onClick={toggleSidebar}>
            Usta sifarişi
          </Link>
          <Link href="/chatdirilma" className="sidebar-link" onClick={toggleSidebar}>
            Çatdırılma
          </Link>
          <Link href="/zemanet" className="sidebar-link" onClick={toggleSidebar}>
            Zəmanət
          </Link>
          <Link href="/haqqimizda" className="sidebar-link" onClick={toggleSidebar}>
            Haqqımızda
          </Link>
          <Link href="/elaqe" className="sidebar-link" onClick={toggleSidebar}>
            Əlaqə
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Header;