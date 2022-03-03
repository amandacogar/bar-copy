import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";
import Home from "./components/home";
import Events from "./components/events/events";
import GetToKnowUs from "./components/about/gettoknowus";
import Menu from "./components/menu/menu";
import VisitUs from "./components/visitus";
import reportWebVitals from "./tests/reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="get-to-know-us" element={<GetToKnowUs />} />
        <Route path="menu" element={<Menu />} />
        <Route path="events" element={<Events />} />
        <Route path="visit-us" element={<VisitUs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
