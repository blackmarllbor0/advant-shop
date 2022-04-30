import { FC, useEffect, useState, KeyboardEvent, MouseEvent } from "react";

import "./CityModal.scss";

import data from "../../DATA.json";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";
import { toggleCityListType } from "../../types/cities";
import CityList from "./CityList";
import DropDownCityList from "./DropDownCityList";

type prop = {
  closeModal: () => void;
};

interface List {
  [key: string]: string[];
}

const CityModal: FC<prop> = (props) => {
  const [value, setValue] = useState<string>("");
  const [dropList, setDropList] = useState<string[]>([]);
  const { country } = userTypeSelector((state) => state.city);
  const { setCountry, setCityList, setActiveCity } = useAction();

  useEffect(() => toggleCityList(toggleCityListType, country), [country]);

  const getCityList = (country: string = "rus"): void => {
    const list: List = data.cityList;
    const res: string[] = list[country];
    setCityList(res);
  };

  const toggleCityList = (toggle: any, country: string): void => {
    const result = toggle[country];
    getCityList(result);
  };

  const toggleActive = (toggleCounrty: string): void => {
    if (toggleCounrty !== country) setCountry(toggleCounrty);
  };

  document.addEventListener("keydown", (event): void => {
    if (event.key === "Escape") {
      props.closeModal();
    }
  });

  const closeModalClick = (): void => props.closeModal();

  const searchCity = (event: KeyboardEvent<HTMLInputElement>) => {
    let list: string[] = [];
    data.cityList.all.forEach((item) => {
      const city = item.toLowerCase(),
        lvalue = value.toLowerCase();
      if (city === lvalue) {
        if (event.code === "Enter") {
          setActiveCity(item);
          setValue("");
          props.closeModal();
        }
      }
      if (city.includes(lvalue) && lvalue.length > 2) {
        list.push(item);
        setDropList(list);
      }
      if (value.length < 3) setDropList([]);
    });
  };

  const enterCityClick = () => {
    data.cityList.all.forEach((item) => {
      const city = item.toLowerCase(),
        lvalue = value.toLowerCase();
      if (city === lvalue) {
        setActiveCity(item);
        setValue("");
        props.closeModal();
      }
    });
  };

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
              <input
                type="text"
                placeholder="Введите город"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyUp={searchCity}
              />
              {dropList.length ? (
                <DropDownCityList
                  list={dropList}
                  close={props.closeModal}
                  setCity={setActiveCity}
                />
              ) : null}
              <button onClick={enterCityClick}>Выбрать</button>
            </div>
          </div>
          <CityList closeModal={props.closeModal} />
        </div>
        <i className="fa-solid fa-xmark close-btn" onClick={closeModalClick} />
      </div>
    </>
  );
};

export default CityModal;
