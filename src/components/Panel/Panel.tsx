import { Link } from "react-router-dom";
import "./Panel.scss";

const Panel = () => {
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
            <div className="block">0</div>
            <Link to={"/"}>Корзина</Link>
          </div>
          <div className="review">
              <Link to={'/'}>
                  Оформить заказ
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
