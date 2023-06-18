import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/login";
import Lista from "./pages/lista";
import Calendario from "./pages/calendario";
import {SideBar} from "./componentes/navbar";

function App() {
  return (
   <BrowserRouter>
     <SideBar />
        <Routes>
        
          <Route path="/" element={<Login />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/calendario" element={<Calendario />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
