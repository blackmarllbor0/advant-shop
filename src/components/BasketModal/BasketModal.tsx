import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import "./BasketModal.scss";

const BasketModal = () => {
  const modal = useRef<HTMLDivElement>(null);
  const result = useRef<HTMLDivElement>(null);

  const { show, items } = userTypeSelector((state) => state.basket);

  const newItems = Array.from(new Set(items));

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset >= 50) {
        modal.current!.style.top = "0px";
        result.current!.style.top = newItems.length === 1 ? "135px" : "240px";
      } else if (window.pageYOffset <= 50) {
        modal.current!.style.top = "60px";
        result.current!.style.top = newItems.length === 1 ? "195px" : "295px";
      }
    });
  });

  return (
    <div
      className="modal_basket"
      style={{
        display: show && items.length ? "flex" : "none",
        overflowY: newItems.length >= 3 ? "scroll" : "auto",
        height: newItems.length === 1 ? "max-content" : "240px",
      }}
      ref={modal}
    >
      <div className="margin" />
      {newItems.map(({ bigImage, title, price }, i) => {
        return (
          <div className="product row" key={i}>
            <Link to={"/"}>
              <img src={bigImage} alt={title} />
            </Link>
            <div className="desc">
              <Link to={"/"} className="link">
                {title}
              </Link>
              <span>{`Количество: ${
                items.filter((item) => item.title === title).length
              }`}</span>
              <span>Цена: {price} руб.</span>
            </div>
          </div>
        );
      })}
      <div
        ref={result}
        className="result"
        style={{
          top: newItems.length === 1 ? "195px" : "295px",
        }}
      >
        <span>
          {`Итого ${items
            .map((item) => +item.price)
            .reduce((prev, next) => +prev + +next, 0)}  руб`}
        </span>
        <div className="btns">
          <button className="btn btn-blue">Корзина</button>
          <button className="btn btn-dark">Оформить</button>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
