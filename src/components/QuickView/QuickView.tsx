import {
  ChangeEvent,
  FC,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import { seacrList } from "../../interfaces/searchList";
import ImagesList from "./ImagesList/ImagesList";
import "./QuickView.scss";

type prop = {
  review: any[];
  props: seacrList;
  close: () => void;
  setQuickContent: (item: seacrList) => void;
};

const QuickView: FC<prop> = (props) => {
  const {
    title,
    article,
    price,
    color,
    id,
    category,
    smallImages,
    availability,
  } = props.props;
  const [quantity, setQuantity] = useState<number>(1);
  const { productList } = userTypeSelector((state) => state.product);
  const [activeImage, setActiveImage] = useState<string>(smallImages[0]);
  const { setBasketItems } = useAction();

  useEffect(() => {
    if (quantity > 10) setQuantity(10);
    if (quantity <= 0) setQuantity(1);
  }, [quantity]);

  const incrementQuantity = () => {
    if (quantity >= 10) return;
    setQuantity((quantity) => quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((quantity) => quantity - 1);
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+event.target.value);
  };

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") props.close();
  });

  const setQuickContentNext = () => {
    const res = Array.from(
      productList.filter((item) => item.category === category)
    ).slice(0, 4);

    let index: number;
    res.forEach((item, i) => {
      if (item.id === id) index = i;
    });

    if (index! !== 3) {
      props.setQuickContent(res[index! + 1]);
      setActiveImage(res[index! + 1].smallImages[0]);
    }
  };

  const setQuickContentBack = () => {
    const res = Array.from(
      productList.filter((item) => item.category === category)
    ).slice(0, 4);

    let index: number;
    res.forEach((item, i) => {
      if (item.id === id) index = i;
    });

    if (index! !== 0) {
      props.setQuickContent(res[index! - 1]);
      setActiveImage(res[index! - 1].smallImages[0]);
    }
  };

  const addToBasket = () => {
    for (let i = 0; i < quantity; i++) {
      setBasketItems(props.props);
    }
    setQuantity(1);
  };

  return (
    <>
      <div className="dark" onClick={props.close} />
      <div className="quick_view">
        <ImagesList
          imageList={smallImages}
          title={title}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <div className="product-content">
          <Link to={"/"} className="link">
            {title}
          </Link>
          <span className="artcl">Артикул {article}</span>
          <div className="product-review">
            <span
              className="availability"
              style={{
                background: availability ? "#b1cd03" : "red",
              }}
            >
              {availability ? "Есть в наличии" : "Нету в наличчи"}
            </span>
            <div className="stars">{props.review}</div>
          </div>
          <div className="quantity">
            <span>Количество: </span>
            <label>
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={(event) => changeInput(event)}
              />
              <div className="p-m">
                <i
                  className="fa-solid fa-arrow-up"
                  onClick={incrementQuantity}
                ></i>
                <i
                  className="fa-solid fa-down-long"
                  onClick={decrementQuantity}
                ></i>
              </div>
            </label>
          </div>
          <div className="color">
            <span>Цвет</span>
            <div className="color-row">
              {color.length
                ? color.map((name) => (
                    <div className="color-border" key={name}>
                      <div
                        className="color-block"
                        style={{ background: name }}
                      ></div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <hr />
          <div className="price">
            <div className="text">
              <h2>{price} руб.</h2>
              <span>+120 руб. на бонусную карту</span>
            </div>
            <button className="btn" onClick={addToBasket}>
              Добавить
            </button>
          </div>
          <hr />
        </div>
      </div>
      <i className="fa-solid fa-xmark close-btn" onClick={props.close} />
      <i
        className="fa-solid fa-angle-right next"
        style={{
          display: id === "4" ? "none" : "block",
        }}
        onClick={setQuickContentNext}
      />
      <i
        className="fa-solid fa-angle-left back-btn"
        style={{
          display: id === "1" ? "none" : "block",
        }}
        onClick={setQuickContentBack}
      />
    </>
  );
};

export default QuickView;
