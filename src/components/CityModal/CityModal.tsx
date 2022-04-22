import { FC, MouseEvent, useEffect } from "react";

import "./CityModal.scss";

import data from "../../DATA.json";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";

type prop = {
  closeModal: () => void;
};

const CityModal: FC<prop> = (props) => {
  const { cities, country } = userTypeSelector((state) => state.city);
  const { setCountry } = useAction();

  const toggleActive = (counrty: string) => {
    setCountry(counrty);
  };

  useEffect(() => {
    fetch(
      ""
    ).then(data => data.json()).then(data => console.log(data)).catch(e => console.log(e))
  }, [country]);

  const closeModalClick = () => {
    props.closeModal();
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      props.closeModal();
    }
  });

  return (
    <>
      <div className="dark" onClick={closeModalClick} />
      <div className="city-panel">
        <div className="city">
          <span className="we-are">Где вы находитесь?</span>
          <div className="countries">
            {data.countries.map((item, i) => (
              <div
                key={i}
                className={`country ${
                  item.country === country ? "active" : null
                }`}
                onClick={() => toggleActive(item.country)}
              >
                <img src={item.image} alt="" />
                <span className="link">{item.country}</span>
              </div>
            ))}
          </div>
          <div className="search">
            <span>Ваш город:</span>
            <div>
              <input type="text" placeholder="Введите город" />
              <button>Выбрать</button>
            </div>
          </div>
        </div>
        <i className="fa-solid fa-xmark close-btn" onClick={closeModalClick} />
      </div>
    </>
  );
};

export default CityModal;
