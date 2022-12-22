import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./Views/Inicio";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Registro from "./Views/Registro";
import Apoie from "./Views/Apoie";
import Estoques from "./Views/Estoques";
import Tabelas from "./Views/Tabelas";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Apoie" element={<Apoie />} />
        <Route path="/Tabelas" element={<Tabelas />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
