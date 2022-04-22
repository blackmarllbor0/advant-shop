import React from "react";
import Banner from "../Banner/Banner";
import Toolbar from "../Toolbar/Toolbar";

const Header: React.FC = () => {
  return (
    <header>
        <Toolbar />
        <Banner />
    </header>
  );
};

export default Header;
