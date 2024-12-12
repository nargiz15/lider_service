import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-block">
      <div className="order-side">
        <h2>Usta sifarişi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac est nulla
          tellus pharetra egestas.
        </p>
        <form>
          <input type="text" placeholder="*Adınız və Soyadınız" required />
          <input type="number" placeholder="*Telefon nömrəniz" required />

          <select id="service" name="service" required>
            <option value="" disabled selected>
            Sifariş etmək istədiyiniz xidməti seçin
            </option>
            <option value="delivery">Çatdırılma</option>
            <option value="installation">Quraşdırma</option>
            <option value="repair">Təmir</option>
            <option value="consultation">Konsultasiya</option>
          </select>
          <input type="text" placeholder="Sifariş haqqında məlumat"/>
          <button type="submit">Sifariş et</button>
        </form>
      </div>
      <div className="contact-text">
        <h2>Əlaqə</h2>
        <div className="icon-text-block">
        <CiLocationOn /> 
        <p>Bakı ş., Şamaxı yolu 15-ci km.</p>
        </div>
        <div className="icon-number-block">
        <IoCallOutline />
        <div className="numbers"><p>(+994 12) 565-1-565</p>
        <p>(+994 12) 565-2-565</p>
        <p>(+994 55) 222-32-46</p>
        <p>(+994 55) 222-34-19</p>
        </div>
        
        </div>
        <div className="icon-text-block">
        <CiMail />
        <p>office@solitonservice.com</p>

        </div>
      </div>
    </div>
  );
};

export default Contact;
