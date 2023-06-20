import React, { useEffect } from "react";
import "../style/calendario.css";
import "../style/modal.css";
import Calendar from "../componentes/user";
import data from "../datas/infos.json";

function Calendario() {
  return (
    <div className="calendario-screen">
      {/* <Submit /> */}
      <div className="principal-calendar-screen">
        <div className="title-calendar">
          <h2>Bem Vindo(a), Ana Fernandes.</h2>
        </div>
        <div className="scroll-cards">
          <h1 id="h1-scrool">Atividades Recentes</h1>
        <div className="view-overflow">
          {data.map((item) => {
            console.log(item);
            let datetime = new Date(item.dataEntrega);
            const formattedDatetime = datetime.toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div className="card-view">
                <div className="header-card">
                  <h3>{item.nomeMateria}</h3>
                </div>
                <div className="body-card">
                  <div className="info-card">
                    <h3>{item.descricao}</h3>
                  </div>
                  <div className="info-card2">
                    <h1>Data de Entrega:</h1>
                    <h2>{formattedDatetime}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        
        <div className="body-calendar">
          <Calendar data={data} />
        </div>
      </div>
    </div>
  );
}
export default Calendario;
