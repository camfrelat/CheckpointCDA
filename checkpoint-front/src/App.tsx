import React from "react";
import "./App.css";
import Continents from "./pages/Continents/Continents";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/continents" element={<Continents />} />
          <Route path="/countries/:code" element={<Countries />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
