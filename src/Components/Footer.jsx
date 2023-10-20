import React from "react";
import bigLogo from "../image/big-logo.svg";
import imageGps from "../image/image-gps.svg";
import imagePhone from "../image/image-phone.svg";
import imageMail from "../image/image-mail.svg";
import logoFacebook from "../image/facebook (1).svg";
import logoLinkedin from "../image/linkedin.svg";
import logoPinterest from "../image/pinterest.svg";
import logoTwitter from "../image/twitter.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-link">
        <img src={bigLogo} alt="big-logo"></img>

        <ul className="flex-link-footer">
          <li className="information-links">Информация</li>
          <li className="information-links">Главная</li>
          <li className="information-links">Галерея</li>
          <li className="information-links">Проекты</li>
          <li className="information-links">Сертификаты</li>
          <li className="information-links">Контакты</li>
        </ul>

        <ul className="contact-footer flex-link-footer">
          <li className="information-links">Контакты</li>
          <div className="information-footer">
            <img src={imageGps} alt="logo-gps"></img>
            <li className="information-links">
              100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
            </li>
          </div>
          <div className="information-footer">
            <img src={imagePhone} alt="logo-phone"></img>
            <li className="information-links">+38 (000) 000 00 00</li>
          </div>
          <div className="information-footer">
            <img src={imageMail} alt="logo-mail"></img>
            <li className="information-links">mail@gmail.com</li>
          </div>
        </ul>

        <ul className="flex-link-footer flex-link-information">
          <li className="information-links">Социальные сети</li>
          <div className="social-media">
            <li>
              <img src={logoFacebook} alt="logo-facebook" />
            </li>
            <li>
              <img src={logoTwitter} alt="logo-facebook" />
            </li>
            <li>
              <img src={logoLinkedin} alt="logo-facebook" />
            </li>
            <li>
              <img src={logoPinterest} alt="logo-facebook" />
            </li>
          </div>
        </ul>
      </div>
      <div className="bottom-footer">
        <div className="horizontal-line"></div>
        <div className="bottom-text-footer">
          © 2019 Digital Project. Все права защищены.
        </div>
      </div>
    </div>
  );
};

export default Footer;
