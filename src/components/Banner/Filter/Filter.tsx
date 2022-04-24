import { MouseEvent, useRef } from "react";
import "./Filter.scss";

import data from "../../../DATA.json";
import { Link } from "react-router-dom";

const Filter = () => {
  const viewBlock = useRef<HTMLDivElement>(null);

  const hoverViews = (event: MouseEvent<HTMLDivElement>) => {
    if (event.type === "mouseover") {
      viewBlock.current!.style.display = "flex";
    }
    if (event.type === "mouseout") {
      viewBlock.current!.style.display = "none";
    }
  };

  return (
    <div className="row">
      <div
        className="btn btn-dark row"
        onMouseOver={(event) => hoverViews(event)}
        onMouseOut={(event) => hoverViews(event)}
      >
        <span>Каталог товаров</span>
        <i className="fa-solid fa-angle-down mb-10" />
        <div className="categories" ref={viewBlock}>
          {data.caregory.map((item, i) => (
            <Link key={i} className="link" to={"/"}>
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="row">
          <input type="search" placeholder="Поиск" className="input" />
          <button className="btn btn-blue row">Найти</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
