import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { seacrList } from "../../../../interfaces/searchList";
import "./DropList.scss";

type prop = {
  list: seacrList[];
};

const DropList: FC<prop> = ({ list }) => {
  const [show, setShow] = useState<boolean>(true);

  document.addEventListener('click', event => {
    const none = document.querySelector('.drop-list-two');
    if (event.target !== none) {
        setShow(false);
    }
  })
  
  return (
    <div
      className="drop-list-two cols"
      style={{
        overflowY: list.length > 4 ? "scroll" : "auto",
        display: show ? 'block' : 'none'
      }}
    >
      <div className="row cat">
        <span>Категории</span>
        <i className="fa-solid fa-xmark" onClick={() => setShow(false)}/>
      </div>
      <hr />
      <div className="a">
        {list[0].category !== list[list.length - 1].category ? (
          <>
            <Link className="link" to={"/"}>
              {list[0].category}
            </Link>{" "}
            и{" "}
            <Link className="link" to={"/"}>
              {list[list.length - 1].category}
            </Link>{" "}
          </>
        ) : (
          <Link className="link" to={"/"}>
            {list[0].category}
          </Link>
        )}
      </div>
      <div>Товары</div>
      <hr />

      {list.map(({ bigImage, title, price }, i) => (
        <Link to={"/"} className="row hov" key={i}>
          <img src={bigImage} alt={title} />
          <div className="aligin">
            <span className="link">{title.slice(0, 30)}...</span>
            <div className="price">
              Цена: <span>{price}</span>
            </div>
          </div>
        </Link>
      ))}

      <hr />
      <div>
        <Link className="link" to={"/"}>
          Показать все совпадения{" "}
        </Link>
      </div>
    </div>
  );
};

export default DropList;
