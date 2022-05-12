import "./Patch.scss";
import { Link } from "react-router-dom";
import { FC } from "react";

const Patch: FC<{ category: string }> = ({ category }) => {
  return (
    <div className="patch">
      <Link to={"/"} className="reverse-link">
        Главная
      </Link>
      <i className="fa-solid fa-angle-right" />
      <span>{category}</span>
    </div>
  );
};

export default Patch;
