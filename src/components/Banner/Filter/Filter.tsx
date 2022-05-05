import { MouseEvent, useRef, useState } from "react";
import "./Filter.scss";

import data from "../../../DATA.json";
import { Link } from "react-router-dom";
import { seacrList } from "../../../interfaces/searchList";
import DropList from "./DropList/DropList";

const Filter = () => {
  const viewBlock = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>("");
  const [dropList, setDropList] = useState<seacrList[]>([]);

  const keys: string[] = [
    "covers",
    "watch",
    "Headphones",
    "Columns",
    "Akamulator",
    "Smartfon",
  ];

  const list = keys
    .map((key) => Object.entries(data).filter(([item]) => item === key)[0][1])
    .flat() as seacrList[];

  const search = () => {
    const res = list.filter(
      ({ title }) =>
        title.toLowerCase().includes(value.toLowerCase()) && value.length > 2
    );
    setDropList(res);
  };

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
          {data.translateCategory.map((item, i) => (
            <Link key={i} className="link" to={"/"}>
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="row">
          <input
            type="search"
            placeholder="Поиск"
            className="input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyUp={search}
          />
          {dropList.length & value.length ? <DropList list={dropList} /> : null}
          <button className="btn btn-blue row">Найти</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;