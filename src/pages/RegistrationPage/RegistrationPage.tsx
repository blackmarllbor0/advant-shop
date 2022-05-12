import { useState, KeyboardEvent, useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation";

import "./RegistrationPage.scss";

const RegistrationPage = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [bonus, setBonus] = useState<boolean>(true);
  const [news, setNews] = useState<boolean>(true);
  const inputs = useRef<HTMLInputElement[]>([]);
  const { changeInput, error, normal } = useValidation();

  const inputsValue = [
    {
      type: "text",
      name: "name",
      class: "input",
      place: "Введите имя",
      span: "Имя",
      value: name,
      setValue: setName,
    },
    {
      type: "text",
      name: "surname",
      class: "input",
      place: "Введите фамилию",
      span: "Фамилия",
      value: surname,
      setValue: setSurname,
    },
    {
      type: "email",
      name: "email",
      class: "input",
      place: "Введите E-mail",
      span: "E-mail",
      value: email,
      setValue: setEmail,
    },
    {
      type: "text",
      name: "phone",
      class: "input",
      place: "Введите телефон",
      span: "Телефон",
      value: phone,
      setValue: setPhone,
    },
    {
      type: "password",
      name: "password",
      class: "input",
      place: "Введите пароль",
      span: "Пароль",
      value: password,
      setValue: setPassword,
    },
    {
      type: "password",
      name: "confPassword",
      class: "input",
      place: "Подтвердите пароль",
      span: "Подтвердите пароль",
      value: confPassword,
      setValue: setConfPassword,
    },
  ];

  const changeInputLocal = (event: KeyboardEvent<HTMLInputElement>) => {
    const { style } = event.currentTarget;

    if (event.code === "Enter") {
      const index =
        inputs.current!.findIndex(
          (item) => item.name === event.currentTarget.name
        ) + 1;

      if (
        style.borderColor !== error &&
        index !== 6 &&
        event.currentTarget.value.length > 0
      )
        inputs.current![index].focus();
    }

    changeInput(event, name, surname, email, phone, password, confPassword);
  };

  const changeForm = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="container register-block">
      <h1>Регистарция</h1>
      <div className="patch">
        <Link to={"/"} className="reverse-link">
          Главная
        </Link>
        <i className="fa-solid fa-angle-right" />
        <span>Регистарция</span>
      </div>
      <form onSubmit={(event) => changeForm(event)}>
        <span id="text">
          В демонстрационном режиме форма заполнена тестовыми данными
        </span>
        {inputsValue.map((item, index) => (
          <label key={item.name}>
            <span>
              {item.span} <p>*</p>
            </span>
            <input
              type={item.type}
              name={item.name}
              className={item.class}
              placeholder={item.place}
              value={item.value}
              ref={(elem: HTMLInputElement) => (inputs.current[index] = elem)}
              onChange={(event) => item.setValue(event.target.value)}
              onKeyUp={(event) => changeInputLocal(event)}
              onBlur={(event) =>
                (event.currentTarget.style.borderColor = normal)
              }
            />
          </label>
        ))}
        <label>
          <span>Бонусы</span>
          <input
            type="checkbox"
            name="bonus"
            id="check"
            checked={bonus}
            onChange={() => setBonus(!bonus)}
          />
          <p className="p">
            Хочу получить бонусную карту и оплачивать покупки бонусами!
          </p>
        </label>
        <label>
          <span>Подписаться на новости</span>
          <input
            type="checkbox"
            name="news"
            className="i"
            checked={news}
            onChange={() => setNews(!news)}
          />
        </label>
        <button className="btn btn-blue">Зарегестрироваться</button>
      </form>
      <div className="register">
        <h3>Зачем нужна регистрация?</h3>
        <p>
          Зарегистрировавшись на сайте Вы сможете получить личный кабинет, что
          позволит Вам отслеживать историю заказов, быстрее оформлять заказы в
          нашем Интернет магазине, так как вся информация о Вас будет доступна в
          нашем магазине и ее не нужно будет повторно вносить
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
