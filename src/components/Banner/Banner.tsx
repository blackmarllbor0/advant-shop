import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import data from "../../DATA.json";

import "./Banner.scss";
import Filter from "./Filter";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="logo">
          <Link to={'/'}>
            <img src={data.logo.thumbnail} alt={data.logo.name} />
          </Link>
        </div>
        <div className="main_header">
          <ul>
            <li>
              <Link to={"/"}> О магазине </Link>
            </li>
            <li>
              <Link to={"/"}> Доставка и Оплата </Link>
            </li>
            <li>
              <Link to={"/"}> Блог </Link>
            </li>
            <li>
              <Link to={"/"}> Контакты </Link>
            </li>
          </ul>
          <Filter />
        </div>
        <div className="aside_block">
          <div className="basket">
            <i className="fa-duotone fa-basket-shopping" />
            <span>Корзина пуста</span>
          </div>
          <div className="number">
            <span>+7 (495) 000-00-00</span>
          </div>
          <div className="responce">
            <Link to={"/"}>Отправить сообщение</Link>
            <Link to={"/"}>Обратный звоно</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
