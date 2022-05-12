import { FC } from "react";
import "./SendMessage.scss";

const SendMessage: FC<{ validate: boolean; message: string }> = ({
  message,
  validate,
}) => {
  return (
    <div className={`absolute-message ${validate ? "green" : "red"}`}>
      {message}
    </div>
  );
};

export default SendMessage;
