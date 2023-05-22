import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Continents from "./pages/Continents/Continents";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./pages/Countries";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/continents" element={<Continents />} />
          <Route path="/continents" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
