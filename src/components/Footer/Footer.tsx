import FooterCards from "../FooterCards/FooterCards";
import InfoFooter from "../InfoFooter/InfoFooter";
import Panel from "../Panel/Panel";
import StartModal from "../startModal/startModal";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <InfoFooter />
      <FooterCards />
      <Panel />
      <StartModal />
    </footer>
  );
};

export default Footer;
