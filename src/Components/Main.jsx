import React from "react";
import one from "../image/1.svg";
import two from "../image/2.svg";
import image1 from "../image/image1.svg";
import image2 from "../image/image2.svg";
import image3 from "../image/image3.svg";
import image4 from "../image/image4.svg";
import image5 from "../image/image5.svg";
import imageMain from "../image/image-sectionMain.svg";
import checkMark from "../image/check-mark.svg";
const Main = () => {
  return (
    <div className="main">
      <div className="main-content-top">
        <h1 className="header-block-about-company ">Основные задачи</h1>
        <div className="main-content-text">
          <div className="main-content main-content-left">
            <img src={one} alt="images-number-one"></img>
            <div className=" main-contentText main-contentText-left">
              Создание комфортных условий и повышение качества обслуживания
              клиентов
            </div>
          </div>

          <div className=" main-content main-content-right">
            <img src={two} alt="images-number-two"></img> 
            <div className="main-contentText main-contentText-right">
              Постоянно совершенствовать качество предоставляемых услуг путем
              обучения персонала, закупки нового оборудования и усиленной
              рекламы на рынке
            </div>
          </div>
        </div>
      </div>
      <div className="main-content-middle">
        <h1 className="header-block-about-company ">Наши проекты</h1>

        <div className="image-container">
          <div className="image-item">
            <img src={image1} alt="main-content-images" />
            <div className="image-overlay">
              <div>
                <div className="image-text">ДОСУГОВЫЙ</div>
                <div className="image-text">ЦЕНТР</div>
              </div>
              <a href="#" className="button-main">
                ПОДРОБНЕЕ →
              </a>
            </div>
          </div>

          <div className="image-item">
            <img src={image2} alt="main-content-images"></img>
            <div className="image-overlay">
              <div>
                <div className="image-text">ДОСУГОВЫЙ </div>
                <div className="image-text">ЦЕНТР</div>
              </div>
              <a href="#" className="button-main">
                ПОДРОБНЕЕ →
              </a>
            </div>
          </div>
          <div className="image-item">
            <img src={image3} alt="main-content-images"></img>
            <div className="image-overlay">
              <div>
                <div className="image-text image-text-small">ДОСУГОВЫЙ </div>
                <div className="image-text image-text-small">ЦЕНТР</div>
              </div>
              <a href="#" className="button-main">
                ПОДРОБНЕЕ →
              </a>
            </div>
          </div>

          <div className="image-item">
            <img src={image4} alt="main-content-images"></img>
            <div className="image-overlay">
              <div>
                <div className="image-text ">ДОСУГОВЫЙ </div>
                <div className="image-text ">ЦЕНТР</div>
              </div>
              <a href="#" className="button-main">
                ПОДРОБНЕЕ →
              </a>
            </div>
          </div>

          <div className="image-item">
            <img src={image5} alt="main-content-images"></img>
            <div className="image-overlay">
              <div>
                <div className="image-text image-text-small">ДОСУГОВЫЙ </div>
                <div className="image-text image-text-small">ЦЕНТР</div>
              </div>
              <a href="#" className="button-main">
                ПОДРОБНЕЕ →
              </a>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "end" }}>
          <button className="button-main-middle">ВСЕ ПРОЕКТЫ →</button>
        </div>
      </div>
      <div className="main-content-bottom">
        <h1 className="header-block-about-company ">Связаться с нами</h1>
        <div className="container-main">
          <div className="main-content-left">
            <form className="form-main">
              <input
                type="text"
                name="fullName"
                placeholder="Имя"
                className="input-formMain"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Номер телефона*"
                className="input-formMain"
              />
              <input
                type="text"
                name="email"
                placeholder="E-mail*"
                className="input-formMain"
              />
              <input
                type="text"
                name="productInterest"
                placeholder="Интересующий товар/услуга"
                className="input-formMain"
              />
              <input
                type="text"
                name="message"
                placeholder="Сообщение*"
                className="input-formMain placeholder-red"
              />

              <div className="text-form">
                <img src={checkMark} alt="check-mark" />
                <div className="bottom-text-form">
                  Отправляя заявку Вы соглашаетесь с политикой
                  конфиденциальности
                </div>
              </div>

              <input
                type="submit"
                value="Отправить →"
                className="button-main-middle"
              />
              
            </form>
          </div>
          <div className="main-content-right">
            <img src={imageMain} alt="images-mainSection"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
