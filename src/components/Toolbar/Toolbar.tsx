import { useState, FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import CityModal from "../CityModal/CityModal";

import "./Toolbar.scss";

const Toolbar: FC = () => {
  const [view, setView] = useState<boolean>(false);

  const showPanel = (event: MouseEvent<HTMLSpanElement>) => {
    setView((view) => !view);
  };

  const closeModal = () => setView(false);

  return (
    <div className="toolbar">
      {view ? <CityModal closeModal={closeModal} /> : null}
      <div className="container">
        <div className="you__city">
          <span className="choise">Ваш город: </span>
          <span className="city" onClick={(event) => showPanel(event)}>
            Москва
          </span>
        </div>
        <div className="toolbar_panel">
          <Link to={"/"}> Войти </Link>
          <Link to={"/"}> Регистрация </Link>
          <Link to={"/"}> Администрирование </Link>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
