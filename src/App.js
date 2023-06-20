import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import Login from "./pages/login";
import Lista from "./pages/lista";
import Calendario from "./pages/calendario";
import { SideBar } from "./componentes/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
      <SideBarWrapper />
    </BrowserRouter>
  );
}

function SideBarWrapper() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null; // Não renderiza o SideBar quando a rota é "/"
  }

  return <SideBar />;
}

export default App;

