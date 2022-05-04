import { useEffect, useState } from "react";
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

  useEffect(() => {
    const res = Array.from(
      data.caregory
        .map(
          (cat) =>
            Object.entries(data).filter(
              ([item]) => item === cat
            )[0][1] as seacrList[]
        )
        .flat()
    );

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

  return (
    <div className="main_product">
      <StartModal />

      {productList.length ? (
        data.caregory.map((item, i) => <Cards key={i} data={filterData(i)} />)
      ) : (
        <h1>Loading...</h1>
      )}

      <hr className="container" />

      <div className="container news-fol">
        <span>Подписа на новости</span>
        <form>
          <input placeholder="Ваш E-mail" type="email" />
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
    </div>
  );
};

export default MainPage;
