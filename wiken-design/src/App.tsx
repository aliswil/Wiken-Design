import React from "react";
import "./App.css";

import Gallery from "./components/gallery/Gallery";

import logo from "./img/logo_hvit.png";

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
