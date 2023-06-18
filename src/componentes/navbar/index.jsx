import "./style.css";

// import { ReactComponent as TimeSheet } from "../img/Icon ionic-md-time.svg";
// import { ReactComponent as Bandeira } from "../img/receita.svg";
// import { ReactComponent as Mao } from "../img/mao (1).svg";

import { Link } from "react-router-dom";
import React from "react";

import { useState, useEffect } from "react";

import user from "./user.svg";
import list from "./list.svg";
import logo from "./logo.png";

export const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openUser , setOpenUser] = useState(false);

  function handleClick(index) {
    setActiveIndex(index);
  }
  useEffect(() => {}, [activeIndex]);

  //   const items = [
  //     { text: 'Time Sheet', link:'/', img: <TimeSheet />, active: <Active/> },
  //    { text: 'Despesas Gerais', link:'/calendario', img: <Bandeira />, active: <Active/>  },
  //     { text: 'Salários', link:'/lista', img: <Mao />, active: <Active/>  },
  // ];

  return (
    <section className="body-side-bar">
      <div className="inside-body-side-bar">
        <div className="lista-rota" onClick={(e) => {e.preventDefault(); window.location.href="http://localhost:3000/lista"}} >
          {/* <h2>Lista</h2> */}
          <img src={list} alt="list" />
        </div>
        <div className="logo-rota" onClick={(e) => {e.preventDefault(); window.location.href="http://localhost:3000/calendario"}}>
          {/* <h2>Home</h2> */}
          <img src={logo} alt="list" />
        </div>
        <div className="user-rota" onClick={()=> setOpenUser(!openUser)}>
          {/* <h2>Configurações</h2> */}
          <img src={user} alt="list" />
        </div>
      </div>

      <div className="user-config" style={openUser === true ? {display: "block"} : {display: "none"} }>
<div className="header-user-config">
    <img src={logo} alt="logo" />
     </div>
     <div className="nome-user-config">
<h2>Ana Ferndes</h2>
     </div>
      </div>
    </section>
  );
};
