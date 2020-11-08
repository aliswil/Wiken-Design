import React from "react";
import "./App.css";

import logo from "./img/logo_hvit.png";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="Logo" />
      </header>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
