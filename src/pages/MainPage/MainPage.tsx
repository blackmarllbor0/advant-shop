import { FormEvent, useEffect, useRef, useState } from "react";
import Cards from "../../components/Cards/Cards";
import data from "../../DATA.json";

import "./MainPage.scss";
import { Link } from "react-router-dom";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import StartModal from "../../components/startModal/startModal";
import { seacrList } from "../../interfaces/searchList";
import { useAction } from "../../hooks/useAction";
import { userTypeSelector } from "../../hooks/useTypeSelector";

const MainPage = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const { setProdcutList } = useAction();
  const { productList } = userTypeSelector((state) => state.product);
  const [subscribeNewsValue, setSubscribeNewsValue] = useState<string>("");
  const subscribe = useRef<HTMLInputElement>(null);
  const [submitSubscribe, setSubmitSubscribe] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [emailList, setEmailist] = useState<string[]>([]);
  const [changeEmail, setChangeEmail] = useState<boolean>(true);

  useEffect(() => {
    const res = data.caregory
      .map(
        (cat) =>
          Object.entries(data).filter(
            ([item]) => item === cat
          )[0][1] as seacrList[]
      )
      .flat();

    setProdcutList(res);
  }, []);

  document.addEventListener("scroll", () => {
    if (window.pageYOffset >= 800) {
      setScroll(true);
    } else if (window.pageYOffset < 800) {
      setScroll(false);
    }
  });

  const filterData = (index: number) => {
    return productList
      .filter((item) => item.category === data.translateCategory[index])
      .slice(0, 4);
  };

  const validateSubscribe = () => {
    const valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (subscribeNewsValue.toLowerCase().match(valid)) {
      subscribe.current!.style.borderColor = "#e2e3e4";
      setSubmitSubscribe(true);
    } else {
      subscribe.current!.style.borderColor = "#f00";
      setSubmitSubscribe(false);
    }
  };

  const submitSubscribeEmail = (event: FormEvent) => {
    event.preventDefault();

    if (submitSubscribe) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      setSubscribeNewsValue("");

      if (emailList.length) {
        emailList.forEach((item) => {
          if (item !== subscribeNewsValue) {
            setEmailist((emailList) => [...emailList, subscribeNewsValue]);
            setChangeEmail(true);
          } else setChangeEmail(false);
        });
      } else setEmailist([subscribeNewsValue]);
    }
  };

  return (
    <div className="main_product">
      {productList.length ? (
        data.caregory.map((item, i) => <Cards key={i} data={filterData(i)} />)
      ) : (
        <h1>Loading...</h1>
      )}

      <hr className="container" />

      <div className="container news-fol">
        <span>Подписа на новости</span>
        <form onSubmit={(event) => submitSubscribeEmail(event)}>
          <input
            placeholder="Ваш E-mail"
            type="email"
            className="input"
            value={subscribeNewsValue}
            onChange={(event) => setSubscribeNewsValue(event.target.value)}
            ref={subscribe}
            onKeyUp={validateSubscribe}
            onBlur={() => (subscribe.current!.style.borderColor = "#e2e3e4")}
          />
          <button>Подписаться</button>
        </form>
      </div>

      <div className="container news-list rows">
        <div className="list">
          <h2>Новости</h2>
          <div className="cols">
            <Link to={"/"} className="n">
              Меган Фокс в апрельском номере журнала Jalouse
            </Link>
            <p>03 апреля 2021</p>
          </div>
          <div className="cols">
            <Link to={"/"} className="n">
              Состоялся показ Armani Prive на Неделе высокой моды в Париже
            </Link>
            <p>11 марта 2022</p>
          </div>
          <div className="cols">
            <Link to={"/"} className="n">
              Облачные перспективы Windows-8
            </Link>
            <p>11 февраля 2015</p>
          </div>
          <p>Все новости</p>
        </div>
        <div className="searc_review">
          <h3>Отследить заказ</h3>
          <input type="email" placeholder="Номер заказа" />
          <button>Проверить</button>
        </div>
        <div className="gift">
          <img
            src="https://simple.advant.design/images/giftcertificate/certifacate_bow.jpg"
            alt="Сетрификат"
          />
          <div>Подарочные сертификаты</div>
        </div>
      </div>
      {scroll ? <ScrollUp /> : null}
      {showMessage ? SubscribeMessage(setShowMessage, changeEmail) : null}
    </div>
  );
};

const SubscribeMessage = (
  showMessage: (bool: boolean) => void,
  change: boolean
) => {
  return (
    <>
      <div
        className="subscribe-mwssage"
        style={{
          backgroundColor: change ? "#56b356" : "#f00",
        }}
      >
        <i className="fa-solid fa-check"></i>
        <span>
          {change
            ? "Вы успешно подписаись на новости"
            : "Этот адресс уже подписан на обновления"}
        </span>
      </div>
      <i
        className="fa-solid fa-xmark close-submit-message"
        onClick={() => showMessage(false)}
      ></i>
    </>
  );
};

export default MainPage;
