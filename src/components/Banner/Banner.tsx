import { Link } from "react-router-dom";

import data from "../../DATA.json";

import Filter from "./Filter/Filter";

import "./Banner.scss";

const Banner = () => (
  <div className="banner border">
    <div className="container row">
      <div className="logo">
        <Link to={"/"}>
          <img src={data.logo.thumbnail} alt={data.logo.name} />
        </Link>
      </div>
      <div className="main_header">
        <ul className="row">
          <li>
            <Link to={"/"} className="reverse-link">
              {" "}
              О магазине{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"} className="reverse-link">
              {" "}
              Доставка и Оплата{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"} className="reverse-link">
              {" "}
              Блог{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"} className="reverse-link">
              {" "}
              Контакты{" "}
            </Link>
          </li>
        </ul>
        <Filter />
      </div>
      <div className="col">
        <div className="border row">
          <i className="fa-solid fa-basket-shopping" />
          <span>Корзина пуста</span>
        </div>
        <div className="number">+7 (495) 000-00-00</div>
        <div className="row">
          <Link className="link" to={"/"}>
            Отправить сообщение
          </Link>
          <Link className="link" to={"/"}>
            Обратный звоно
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;