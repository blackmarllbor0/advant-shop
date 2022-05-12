import { FormEvent, useEffect, useRef, useState } from "react";
import Patch from "../../components/Patch/Patch";
import { useValidation } from "../../hooks/useValidation";
import "./SendMeassagePage.scss";
import { KeyboardEvent } from "react";
import SendMessage from "../../components/SendMessage/SendMessage";

const SendMeassagePage = () => {
  const [order, setOrder] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const inputs = useRef<HTMLInputElement[]>([]);
  const [submit, setSubmit] = useState<boolean>(false);
  const [showMessage, setShow] = useState<boolean>(false);
  const [button, setButton] = useState<string>("1");

  const { changeInput, error, normal, nextInput } = useValidation();

  useEffect(() => {
    if (submit) {
      setEmail("");
      setName("");
      setOrder("");
      setPhone("");
    }
  }, [submit]);

  const inputList = [
    {
      type: "text",
      name: "order",
      place: "Введите номер заказа",
      text: "Номер заказа",
      value: order,
      setValue: setOrder,
    },
    {
      type: "text",
      name: "name",
      place: "Введите имя",
      text: "Ваше имя",
      value: name,
      setValue: setName,
    },
    {
      type: "email",
      name: "email",
      place: "Введите E-mail",
      text: "Ваш E-mail",
      value: email,
      setValue: setEmail,
    },
    {
      type: "text",
      name: "phone",
      place: "Введите номер телефона",
      text: "Ваш номер телефона",
      value: phone,
      setValue: setPhone,
    },
  ];

  const btns = [
    { id: "1", text: "Вопрос" },
    { id: "2", text: "Благодарность" },
    { id: "3", text: "Предложение" },
    { id: "4", text: "Жалоба" },
  ];

  const changeInputLocal = (event: KeyboardEvent<HTMLInputElement>) => {
    nextInput(event, inputs, inputs.current.length);
    changeInput(event, name, "", email, phone, "", "");

    if (event.currentTarget.name === "order") {
      event.currentTarget.style.borderColor =
        order.length !== 4 ? error : normal;
    }
  };

  const changeForm = (event: FormEvent) => {
    event.preventDefault();

    const checked = inputs.current.filter(
      (item) => item.style.borderColor === error || item.value.length < 1
    );

    if (!checked.length) setSubmit(true);
    else setSubmit(false);

    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 2500);
  };

  return (
    <div className="container send-message-block">
      <h1>Отправить сообщение</h1>
      <Patch category="Отправить сообщение" />
      <p id="txt">
        Мы очень дорожим вашим мнением и прислушиваемся ко всем вашим пожеланиям
        и предложениям. Ответ поступит в самое ближайшее время.
      </p>
      <div className="choice-message">
        {btns.map((item) => (
          <button
            onClick={() => setButton(item.id)}
            className={`btn ${button === item.id ? "btn-dark" : "pas"}`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <form onSubmit={(event) => changeForm(event)}>
        <label>
          <span>
            Ваше сообщение <p>*</p>
          </span>
          <textarea className="input" />
        </label>
        {inputList.map((item, i) => (
          <label key={i}>
            <span>
              {item.text} <p>*</p>
            </span>
            <input
              type={item.type}
              name={item.name}
              className="input"
              placeholder={item.place}
              value={item.value}
              onChange={(event) => item.setValue(event.target.value)}
              onBlur={(event) =>
                (event.currentTarget.style.borderColor = normal)
              }
              onKeyUp={(e) => changeInputLocal(e)}
              ref={(ref: HTMLInputElement) => (inputs.current[i] = ref)}
            />
          </label>
        ))}
        <button className="btn btn-blue">Отправить</button>
      </form>

      {showMessage ? (
        <SendMessage
          validate={submit}
          message={
            submit ? "Сообщение успешно отправлено" : "Вы заполнили не все поля"
          }
        />
      ) : null}
    </div>
  );
};

export default SendMeassagePage;
