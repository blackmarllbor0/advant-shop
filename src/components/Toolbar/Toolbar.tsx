import { useState } from "react";
import { Link } from "react-router-dom";

import { userTypeSelector } from "../../hooks/useTypeSelector";

import CityModal from "../CityModal/CityModal";

import "./Toolbar.scss";

const Toolbar = () => {
  const [view, setView] = useState<boolean>(false);
  const { activeCity } = userTypeSelector((state) => state.city);

  const showPanel = (): void => setView((view) => !view);;

  const closeModal = (): void => setView(false);

  view
    ? (document.querySelector("body")!.style.overflow = "hidden")
    : (document.querySelector("body")!.style.overflow = "auto");

  return (
    <div className="toolbar">
      {view ? <CityModal closeModal={closeModal} /> : null}
      <div className="container row">
        <div className="row">
          <span className="choise">Ваш город: </span>
          <span className="toolbar-link" onClick={showPanel}>
            {activeCity}
          </span>
        </div>
        <div className="row">
          <Link className="toolbar-link" to={"/"}>
            {" "}
            Войти{" "}
          </Link>
          <Link className="toolbar-link" to={"/"}>
            {" "}
            Регистрация{" "}
          </Link>
          <Link className="toolbar-link" to={"/"}>
            {" "}
            Администрирование{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;