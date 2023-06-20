import React from "react";
import "../style/lista.css";

import estrela2 from "../images/estrelaverde.svg";
import estrela3 from "../images/estrelavermelha.svg";
import estrela from "../images/estrelabranca.svg";
import chevron from "../images/chevron-right.svg";
import data from "../datas/infos.json";

function Lista() {
  function getMonthName(month) {
    const monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    return monthNames[month];
  }
  return (
    <div className="list-screen">
      <div className="principal-list-screen">
        <div className="title-list">
          {/* <div className="img-title-list">
              <img src={chevron} alt="chevron" className="chevron" onClick={(e) => {e.preventDefault(); window.location.href="http://localhost:3000/calendario"}}/>
            </div> */}

          <h1>Lista detalhada de atividades</h1>
        </div>
        <div className="body-list">
          <div className="body-list-2">
            {data.map((item) => {
              const date = new Date("2023-06-08T23:59:59");

              const formattedDate = `${date.getDate()} de ${getMonthName(
                date.getMonth()
              )} de ${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;

              return (
                <div className="card-list">
                  <div className="inside-card-list">
                    <div className="icon-list">
                      {item.prioridade === "Alta" ? (
                        <img src={estrela3} alt="estrela" />
                      ) : item.prioridade === "Média" ? (
                        <img src={estrela2} alt="estrela" />
                      ) : (
                        <img src={estrela} alt="estrela" />
                      )}
                    </div>
                    <div className="body-card-list">
                      <h2>{formattedDate}</h2>
                      <div className="header-card-list">
                        <h3>{item.nomeMateria}</h3>
                      </div>
                      <div className="body-card-list">
                        <div className="info-card-list">
                          <h3>{item.descricao}</h3>
                        </div>
                        <div className="info-card2-list">
                          <h3>Prioridade: {item.prioridade}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lista;
