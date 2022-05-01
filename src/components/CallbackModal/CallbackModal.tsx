import { FC, useRef, useState, ChangeEvent, useEffect } from "react";
import "./CallbackModal.scss";

type prop = {
  show: (bool: boolean) => void;
};

const CallbackModal: FC<prop> = ({ show }) => {
  const name = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const [nameValue, setName] = useState<string>("");
  const [phoneValue, setPhone] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);
  const [send, setSend] = useState<boolean[]>([false, false]);

  useEffect(() => {
    name.current!.focus();
  }, []);

  document.addEventListener("keydown", (event): void => {
    if (event.key === "Escape") show(false);
    if (submit) {
      setTimeout(() => {
        if (event.key === "Enter") show(false);
      }, 2000);
    }
  });

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    if (value.replace(/[^\d]/g, "") || value.length < 2 || value.length > 15) {
      name.current!.style.borderColor = "red";
      send[0] = false;
    } else {
      name.current!.style.borderColor = "#e2e3e4";
      send[0] = true;
    }
  };

  const changePhone = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | string[] = Array.from(event.target.value);
    value[0] = "+";
    value = value.join("");
    setPhone(value);
    if (value.length !== 12 || value.replace(/[^\'A-Za-z\b']/g, "")) {
      phone.current!.style.borderColor = "red";
      send[1] = false;
    } else {
      phone.current!.style.borderColor = "#e2e3e4";
      send[1] = true;
    }
  };

  return (
    <>
      <div className="dark" onClick={() => show(false)} />
      <div className="callback">
        <h1>
          Обратный вызов <hr />
        </h1>
        {submit ? (
          <div className="sub">Спасибо! Ваша заявка принята.</div>
        ) : (
          <>
            <div className="info">
              <p>
                Укажите свое имя и номер телефона, и мы Вам обязательно
                перезвоним.
              </p>
              <label>
                <div>
                  Имя <span>*</span>
                </div>
                <input
                  type="text"
                  name="name"
                  className="input"
                  ref={name}
                  value={nameValue}
                  placeholder="Ваше имя"
                  onChange={(event) => changeName(event)}
                  onKeyDown={(event) => {
                    if (event.code === "Enter") phone.current!.focus();
                  }}
                />
              </label>
              <label>
                <div>
                  Телефон <span>*</span>
                </div>
                <input
                  ref={phone}
                  value={phoneValue}
                  type="text"
                  name="phone"
                  className="input"
                  placeholder="+7(999)999-99-99"
                  onChange={(event) => changePhone(event)}
                  onKeyDown={(event) => {
                    if (event.code === "Enter")
                      send[0] && send[1] ? setSubmit(true) : setSubmit(false);
                  }}
                />
              </label>
            </div>
            <div className="down">
              <button
                className="btn btn-dark"
                onClick={() => setSubmit(true)}
                disabled={send[0] && send[1] ? false : true}
              >
                Отправить
              </button>
            </div>
          </>
        )}
      </div>
      <i
        className="fa-solid fa-xmark closeBtn"
        onClick={() => show(false)}
        style={{
          top: submit ? "180px" : "100px",
        }}
      />
    </>
  );
};

export default CallbackModal;
