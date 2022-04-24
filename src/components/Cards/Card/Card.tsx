import { FC, MouseEvent, useRef } from "react";
import { Link } from "react-router-dom";

import { PropsCard } from "../../../interfaces/card";


const Card: FC<PropsCard> = ({ bigImage , title, price, color, revies, id }) => {
  const viewBlock = useRef<HTMLDivElement>(null);

  const hoverViews = (event: MouseEvent<HTMLDivElement>) => {
    if (event.type === "mouseover") {
      viewBlock.current!.style.display = "block";
    }
    if (event.type === "mouseout") {
      viewBlock.current!.style.display = "none";
    }
  };

  let review = [];
  for (let i = 0; i < 5; i++) {
    review[i] = (
      <i className="fa-solid fa-star" key={i} style={{ color: "#d1d1d1" }}></i>
    );
  }
  for (let i = 0; i < revies; i++) {
    review[i] = (
      <i className="fa-solid fa-star" key={i} style={{ color: "#fec419" }}></i>
    );
    if (i > 5) break;
  }

  return (
    <div
      className="cover"
      onMouseOver={(event) => hoverViews(event)}
      onMouseOut={(event) => hoverViews(event)}
    >
      <div className="quick_views" ref={viewBlock}>
        <span>
          <i className="fa-solid fa-magnifying-glass" />
          <span>Быстрый просмотр</span>
        </span>
      </div>
      <Link to={"/"}>
        <img src={bigImage} alt={title} />
      </Link>
      <i className="fa-duotone fa-briefcase"></i>
      <div className="description">
        <Link to={"/"}>{title.slice(0, 30)}...</Link>
        <div className="colors">
          {color?.length ? (
            color?.map((name) => (
              <div className="color_border" key={name}>
                <div className="color" style={{ backgroundColor: name }}></div>
              </div>
            ))
          ) : (
            <div className="color_border" style={{ borderColor: "white" }} />
          )}
        </div>
        <div className="revies">{review}</div>
      </div>
      <div className="add_to_basket">
        <p>
          <span>{price}</span> руб.
        </p>
        <div className="button">
          <i className="fa-solid fa-cart-shopping" />
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};

export default Card;