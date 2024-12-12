import Link from "next/link";
import "./contact2.css";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Map from "./../map/index"

const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb flex items-center text-sm text-gray-600 mb-4">
        <h1 className="banner-title">Əlaqə</h1>
        <Link href="/" className="flex items-center mr-2 hover:text-blue-600">
          Əsas Səhifə
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold">Əlaqə</span>
      </div>
    </div>
  );
};
const Contact2 = () => {
  return (
    <>
 
      <div className="contact-page-wrapper">
        
        <Breadcrumb />
        <div className="contact-info">
          <div className="icon-numbers-block">
          <IoCallSharp />
            <div className="numbers">
                <h2>Telefon</h2>
              <p>(+994 12) 565-1-565</p>
              <p>(+994 12) 565-2-565</p>
              <p>(+994 55) 222-32-46</p>
              <p>(+994 55) 222-34-19</p>
            </div>
          </div>
          <div className="mail-adress">
            <div className="adress">
              <div className="icon-adress">
              <IoLocation />
              </div>
              <div className="adrees-text">
                <h2>Ünvan</h2>
                <p>Bakı ş., Şamaxı yolu 15-ci km.</p>
              </div>
            </div>

            <div className="email">
              <div className="icon-email">
              <IoMdMail />
              </div>
              <div className="adrees-email">
                <h2>Email</h2>
                <p>office@solitonservice.com</p>
              </div>
            </div>
          </div>
        </div>
        <Map/>
      </div>
    </>
  );
};

export default Contact2;
