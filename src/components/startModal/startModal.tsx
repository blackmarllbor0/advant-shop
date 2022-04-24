import { useState } from "react";
import "./startModal.scss";

const StartModal = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="start-modal" style={{ display: show ? "block" : "none" }}>
      <p>
        Уважаемый посетитель! Для лучшего функционирования сайта
        simple.advant.design мы производим сбор Ваших метаданных (cookie, данные
        об IP-адресе и местоположении). В случае, если Вы не хотите, чтобы нами
        был осуществлён сбор Ваших метаданных, Вам необходимо покинуть данный
        сайт.
      </p>
      <button onClick={() => setShow(false)}> Закрыть </button>
      <i className="fa-solid fa-xmark" onClick={() => setShow(false)}></i>
    </div>
  );
};

export default StartModal;
