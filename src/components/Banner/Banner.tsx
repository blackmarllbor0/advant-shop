import { Link } from "react-router-dom";

import data from "../../DATA.json";

import Filter from "./Filter/Filter";

import "./Banner.scss";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import BasketModal from "../BasketModal/BasketModal";
import { useAction } from "../../hooks/useAction";

const Banner = () => {
  const { items } = userTypeSelector((state) => state.basket);
  const { showBasketPanel } = useAction();

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
              showBasketPanel(true);
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
            <Link className="link" to={"/"}>
              Обратный звоно
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
