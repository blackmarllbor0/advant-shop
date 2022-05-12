import { useRef, useState, KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import "./InputPage.scss";

const InputPage = () => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const Mail = useRef<HTMLInputElement>(null);
  const Password = useRef<HTMLInputElement>(null);
  const [checkValidate] = useState<boolean[]>([false, false]);

  const validateMail = (event: KeyboardEvent<HTMLInputElement>) => {
    const valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (mail.toLowerCase().match(valid)) {
      Mail.current!.style.borderColor = "#e2e3e4";
      checkValidate[0] = true;
    } else {
      Mail.current!.style.borderColor = "#f00";
      checkValidate[0] = false;
    }

    if (event.code === "Enter" && checkValidate[0]) {
      Password.current!.focus();
    }
  };

  const validatePassword = (event: KeyboardEvent<HTMLInputElement>) => {
    if (password.length < 8) {
      Password.current!.style.borderColor = "#f00";
      checkValidate[1] = false;
    } else {
      Password.current!.style.borderColor = "#e2e3e4";
      checkValidate[1] = true;
    }

    if (event.code === "Enter") {
      if (!checkValidate[0] && checkValidate[1]) {
        Mail.current!.focus();
      }
    }
  };

  return (
    <div className="entrance-parent container">
      <div className="authorization">
        <div className="authorization-block">
          <h1>Авторизация</h1>
          <div>
            <Link to={"/"} className="reverse-link">
              Главная
            </Link>
            <i className="fa-solid fa-angle-right" />
            <span>Авторизация</span>
          </div>
        </div>
        <div className="enter-input">
          <h2>У меня уже есть учетная запись</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>
                E-mail <p>*</p>
              </span>
              <input
                type="text"
                placeholder="Введите E-mail"
                className="input"
                value={mail}
                onChange={(event) => setMail(event.target.value)}
                ref={Mail}
                onKeyUp={(event) => validateMail(event)}
                onBlur={(event) => (event.target.style.borderColor = "#e2e3e4")}
              />
            </label>
            <label>
              <span>
                Пароль <p>*</p>
              </span>
              <input
                type="password"
                placeholder="Введите пароль"
                className="input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                ref={Password}
                onKeyUp={(event) => validatePassword(event)}
                onBlur={(event) => (event.target.style.borderColor = "#e2e3e4")}
              />
            </label>
            <Link to={"/recovery"} className="link">
              Забыли пароль?
            </Link>
            <button className="btn btn-blue">Вход</button>
          </form>
        </div>
      </div>
      <div className="new-user">
        <h3>Я - новый покупатель</h3>
        <p>
          Регистрация на сайте позволит быстро оформлять заказы, управлять
          заказами через личный кабинет, в полном объеме использовать
          возможности нашего интернет магазина.
        </p>
        <Link to={"/registration"} className="btn">Регистрация</Link>
      </div>
    </div>
  );
};
export default InputPage;
