import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./RecoveryPage.scss";

const RecoveryPage = () => {
  const [value, setValue] = useState<string>("");
  const input = useRef<HTMLInputElement>(null);
  const [validate, setValidate] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const validateMail = () => {
    const valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value.toLowerCase().match(valid)) {
      input.current!.style.borderColor = "#e2e3e4";
      setValidate(true);
    } else {
      input.current!.style.borderColor = "#f00";
      setValidate(false);
    }
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate) {
      input.current!.focus();
      input.current!.style.borderColor = "#f00";
    }

    setValue("");

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  return (
    <div className="container recovery-block">
      <h1>Восстановление пароля</h1>
      <div className="path">
        <Link to={"/"} className="reverse-link">
          Главная
        </Link>
        <i className="fa-solid fa-angle-right" />
        <span>Авторизация</span>
      </div>
      <div className="recovery">
        <span>
          Введите E-mail <p>*</p>
        </span>
        <form onSubmit={(event) => submitForm(event)}>
          <input
            type="text"
            className="input"
            placeholder="Введите E-mail"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyUp={validateMail}
            ref={input}
            autoFocus
            onBlur={() => (input.current!.style.borderColor = "#e2e3e4")}
          />
          <button className="btn btn-dark">Восстановить пароль</button>
        </form>
      </div>
      <p id="p">
        Введите e-mail, который указывали при регистрации. Через несколько минут
        на него придет письмо со ссылкой для восстановления пароля.
      </p>
      {showMessage ? submitMessage() : null}
    </div>
  );
};

const submitMessage = () => {
  return (
    <div className="submit-recovery-message">
      <span>Сообщение о восстановление пароля отпрвлено вам на почту</span>
    </div>
  );
};

export default RecoveryPage;
