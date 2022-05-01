import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useAction";

import { PropsCards } from "../../interfaces/card";

import Card from "./Card/Card";
import Data from "../../DATA.json";

import "./Cards.scss";
import { seacrList } from "../../interfaces/searchList";

const Cards: FC<PropsCards> = ({ data, category }) => {
  const { setProdcutList } = useAction();

  useEffect(() => {
    const res = Object.entries(Data).filter(
      ([item]) => item === category
    )[0][1];
    console.log(res);
    // setProdcutList()
  }, []);

  return (
    <div className="container col gap">
      <Link className="link" to={"/"}>
        {data[0].category}
      </Link>
      <div className="row">
        {data.map((cover) => (
          <Card {...cover} key={cover.id} />
        ))}
      </div>
    </div>
  );
};
export default Cards;
