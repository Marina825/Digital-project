import React from "react";
import logoHeader from "../image/logo.svg";
import imageHouse from "../image/imgHouse.svg";
import arrowLeft from "../image/arrow-left.svg";
import arrowRight from "../image/arrow-right.svg";
import imgHeader1 from "../image/img-header1.svg";
import imgHeader2 from "../image/img-header2.svg";
import imgHeader3 from "../image/img-header3.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-container-left">
          <div className="logo-header">
            <img src={logoHeader} alt="logo-header"></img>
          </div>

          <div className="content-header-left">
            <div>
              <h2 className="header-content-left">PROJECT</h2>
              <h3 className="text-content-left">HOME</h3>
            </div>
            <div className="buttons-header">
              <button className="button-header">
                <img src={arrowLeft} alt="arrow-left"></img>
              </button>
              <button className="button-header">
                <img src={arrowRight} alt="arrow-right"></img>
              </button>
            </div>

            <div className="text-content-left-bottom">01 / 02</div>
          </div>
        </div>
        <div className="header-container-right">
          <ul className="header-menu">
            <li className="header-list-li">ГЛАВНАЯ</li>
            <li className="header-list-li">ГАЛЕРЕЯ</li>
            <li className="header-list-li">ПРОЕКТЫ</li>
            <li className="header-list-li">СЕРТИФИКАТЫ</li>
            <li className="header-list-li">КОНТАКТЫ</li>
          </ul>
          <div className="content-right">
            <img src={imageHouse} alt="images-house"></img>
            <button className="button-overlay">ВЗГЛЯНУТЬ →</button>
          </div>
        </div>
      </div>

      <div className="about-company">
        <div className="images-header">
          <div className="img-header">
            <img src={imgHeader1} alt="img-header1"></img>
            <img src={imgHeader2} alt="img-header2"></img>
          </div>

          <img src={imgHeader3} alt="img-header3"></img>
        </div>
        <div className="block-about-company">
          <h1 className="header-block-about-company">О компании</h1>
          <div className="text-block-about-company">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <button className="button-block-about-company">читать →</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
