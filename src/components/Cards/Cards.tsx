import { FC } from "react";
import { Link } from "react-router-dom";

import { PropsCards } from "../../interfaces/card";

import Card from "./Card/Card";

import "./Cards.scss";

const Cards: FC<PropsCards> = ({ data, category }) => (
  <div className="container col gap">
    <Link className="link" to={"/"}>{category}</Link>
    <div className="row">
      {data.map((cover) => (
        <Card {...cover} key={cover.id} />
      ))}
    </div>
  </div>
);

export default Cards;
