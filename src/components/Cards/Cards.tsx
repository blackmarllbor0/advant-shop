import { FC } from "react";
import { Link } from "react-router-dom";

import { PropsCards } from "../../interfaces/card";

import Card from "./Card/Card";

import "./Cards.scss";

const Cards: FC<PropsCards> = ({ data }) => {
  return (
    <div className="container col gap">
      <Link className="link" to={"/"}>
        {data[0].category}
      </Link>
      <div className="row">
        {data.map((cover, id) => (
          <Card {...cover} key={id} />
        ))}
      </div>
    </div>
  );
};
export default Cards;
