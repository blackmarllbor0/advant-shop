import { Link } from "react-router-dom";
import "./InfoFooter.scss";

const InfoFooter = () => {
  return (
    <div className="back">
      <div className="info-footer container">
        <div className="info">
          <span>Информация</span>
          <Link to={"/"} className="reverse-link">
            О магазине
          </Link>
          <Link to={"/"} className="reverse-link">
            Доставка и Оплата
          </Link>
          <Link to={"/"} className="reverse-link">
            Блог
          </Link>
          <Link to={"/"} className="reverse-link">
            Бонусная программа
          </Link>
          <Link to={"/"} className="reverse-link">
            Контакты
          </Link>
        </div>
        <div className="office">
          <span> Личный кабинет </span>
          <Link to={"/entrance"} className="reverse-link">
            Вход
          </Link>
          <Link to={"/registration"} className="reverse-link">
            Регистрация
          </Link>
          <Link to={"/recovery"} className="reverse-link">
            Забыли пароль?
          </Link>
        </div>
        <div className="social">
          <span> Мы в соц сетях </span>
          <div>
            <i className="fa-brands fa-vk" />
            <a
              href="https://vk.com/blackmarllboro"
              target={"_blank"}
              className="reverse-link"
              rel="noreferrer"
            >
              ВКонтакте
            </a>
          </div>
        </div>
        <div className="bonus">
          <div>
            <div className="gift">
              <i className="fa-solid fa-gift" />
            </div>
            <Link className="reverse-link" to={"/"}>
              Подарочный сертификат{" "}
            </Link>
          </div>
          <div>
            <div className="percent">
              <i className="fa-solid fa-percent" />
            </div>
            <Link className="reverse-link" to={"/"}>
              Подарочный сертификат{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoFooter;
