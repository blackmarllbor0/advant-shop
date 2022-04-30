import { Link } from "react-router-dom";

import data from "../../DATA.json";

import Filter from "./Filter/Filter";

import "./Banner.scss";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import BasketModal from "../BasketModal/BasketModal";
import { useAction } from "../../hooks/useAction";
import CallbackModal from "../CallbackModal/CallbackModal";
import { useState } from "react";

const Banner = () => {
  const [showCallback, setCallback] = useState(false);
  const { items, show } = userTypeSelector((state) => state.basket);
  const { showBasketPanel } = useAction();

  showCallback
    ? (document.querySelector("body")!.style.overflow = "hidden")
    : (document.querySelector("body")!.style.overflow = "auto");

  return (
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
          <div
            className="border row"
            onClick={() => {
              showBasketPanel(show ? false : true);
              setTimeout(() => {
                showBasketPanel(false);
              }, 10000);
            }}
          >
            <i className="fa-solid fa-basket-shopping" />
            <span>
              {items.length
                ? `Корзина: ${items.length} товаров`
                : "Корзина пуста"}
            </span>
          </div>
          <BasketModal />
          <div className="number">+7 (495) 000-00-00</div>
          <div className="row">
            <Link className="link" to={"/"}>
              Отправить сообщение
            </Link>
            <span className="link" onClick={() => setCallback(true)}>
              Обратный звонок
            </span>
            {showCallback ? (
              <CallbackModal show={(bool) => setCallback(bool)} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
