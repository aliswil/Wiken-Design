import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Gallery from "./components/gallery/Gallery";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={Header} path="/" exact />
        <Route component={Gallery} path="/" exact />
        <Route component={About} path="/about" exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
