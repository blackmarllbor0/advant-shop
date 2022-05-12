import { Link } from "react-router-dom";
import Patch from "../../components/Patch/Patch";
import "./SendMeassagePage.scss";

const SendMeassagePage = () => {
  return (
    <div className="container">
      <h1>Отправить сообщение</h1>
      <Patch  category="Отправить сообщение"/>
      
    </div>
  );
};

export default SendMeassagePage;
