import React, { useState } from "react";
import Cards from "../../components/Cards/Cards";
import data from "../../DATA.json";

import "./MainPage.scss";
import { Link } from "react-router-dom";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import StartModal from "../../components/startModal/startModal";

const MainPage = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 800) {
      setScroll(true);
    } else if (window.pageYOffset < 800) {
      setScroll(false);
    }
  })
  
  return (
    <div className="main_product">
      <StartModal />
      
      <Cards data={data.covers} category={data.caregory[0]} />
      <Cards data={data.watch} category={data.caregory[1]} />
      <Cards data={data.Headphones} category={data.caregory[2]} />
      <Cards data={data.Columns} category={data.caregory[3]} />
      <Cards data={data.Akamulator} category={data.caregory[4]} />
      <Cards data={data.Smartfon} category={data.caregory[5]} />

      <div className="container news-fol">
        <span>Подписа на новости</span>
        <form>
          <input placeholder="Ваш E-mail" type="email" />
          <button>Подписаться</button>
        </form>
      </div>

      <div className="container news-list row">
        <div className="list">
          <h2>Новости</h2>
          <div className="col">
            <Link to={"/"} className="n">
              Меган Фокс в апрельском номере журнала Jalouse
            </Link>
            <p>03 апреля 2021</p>
          </div>
          <div className="col">
            <Link to={"/"} className="n">
              Состоялся показ Armani Prive на Неделе высокой моды в Париже
            </Link>
            <p>11 марта 2022</p>
          </div>
          <div className="col">
            <Link to={"/"} className="n">
              Облачные перспективы Windows-8
            </Link>
            <p>11 февраля 2015</p>
          </div>
          <p>Все новости</p>
        </div>
        <div className="searc_review">
          <h3>Отследить заказ</h3>
          <input type="email" placeholder="Номер заказа" />
          <button>Проверить</button>
        </div>
        <div className="gift">
          <img
            src="https://simple.advant.design/images/giftcertificate/certifacate_bow.jpg"
            alt="Сетрификат"
          />
          <div>Подарочные сертификаты</div>
        </div>
      </div>
      {scroll ? <ScrollUp /> : null}
    </div>
  );
};

export default MainPage;
