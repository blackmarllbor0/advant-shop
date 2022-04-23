import { useState, FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import CityModal from "../CityModal/CityModal";

import "./Toolbar.scss";

const Toolbar: FC = () => {
  const [view, setView] = useState<boolean>(false);
  const { activeCity } = userTypeSelector((state) => state.city);

  const showPanel = (event: MouseEvent<HTMLSpanElement>) => {
    setView((view) => !view);
  };

  const closeModal = () => setView(false);

  view ? document.querySelector('body')!.style.overflow = 'hidden' : document.querySelector('body')!.style.overflow = 'auto'

  return (
    <div className="toolbar">
      {view ? <CityModal closeModal={closeModal} /> : null}
      <div className="container">
        <div className="you__city">
          <span className="choise">Ваш город: </span>
          <span className="city" onClick={(event) => showPanel(event)}>
            {activeCity}
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
