import React from "react";

import logo from "../img/logo_hvit.png";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="Logo" />
      </header>
    </div>
  );
}

export default Header;
