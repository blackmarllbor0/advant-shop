import { Link } from "react-router-dom";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import "./Panel.scss";

const Panel = () => {
  const { items } = userTypeSelector((state) => state.basket);

  return (
    <div className="panel">
      <div className="content container">
        <div className="left">
          <div className="par">
            <div className="block">0</div>
            <Link to={"/"}>Вы уже посмотрели</Link>
          </div>
          <div className="par">
            <div className="block">0</div>
            <Link to={"/"}>Сравнение товаров</Link>
          </div>
          <div className="par">
            <div className="block">0</div>
            <Link to={"/"}>Избранное</Link>
          </div>
        </div>
        <div className="rigth">
          <div className="par">
            <div className="block">{items.length}</div>
            <Link to={"/"}>Корзина</Link>
          </div>
          <div
            className="review"
            style={{
              background: items.length ? "#d60000" : "#9e0000",
            }}
          >
            <Link to={"/"}>Оформить заказ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
