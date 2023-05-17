import React from "react";
import "../style/lista.css";
import estrela from "../images/estrela.svg";
import estrelaverde from "../images/estrelaverde.svg";
import estrelavermelha from "../images/estrelavermelha.svg";
import estrelabranca from "../images/estrelabranca.svg";
import chevron from "../images/chevron-right.svg";

function Lista() {
  const [radio0, setRadio0] = React.useState(false);
  const [radio1, setRadio1] = React.useState(false);
  const [radio2, setRadio2] = React.useState(false);
  const [radio3, setRadio3] = React.useState(false);
  const [radio4, setRadio4] = React.useState(false);
  const [radio5, setRadio5] = React.useState(false);

  const [card0, setCard0] = React.useState(true);
  const [card1, setCard1] = React.useState(true);
  const [card2, setCard2] = React.useState(true);
  const [card3, setCard3] = React.useState(true);
  const [card4, setCard4] = React.useState(true);
  const [card5, setCard5] = React.useState(true);

  const [button, setButton] = React.useState(false);
  const [info, setInfo] = React.useState(0);

  const [estrela0, setEstrela0] = React.useState("estrela");
  const [estrela1, setEstrela1] = React.useState("estrela");
  const [estrela2, setEstrela2] = React.useState("estrela");
  const [estrela3, setEstrela3] = React.useState("estrela");

  const [show, setShow] = React.useState(false);

  function changeEstrela(num) {
    if ((num = 0)) {
      console.log("oi");
    } else if ((num = 1)) {
      console.log("oi");
    } else if ((num = 2)) {
      console.log("oi");
    } else if ((num = 3)) {
      console.log("oi");
    }
  }

  function deleteCard(tirar){
console.log(tirar);
    if(tirar === 1){
      setCard0(false)}
    else if(tirar === 2){
    setCard1(false)}

    setRadio0(false)
    setRadio1(false)
    
  }

  return (
    <div>
      <div className="list-screen">
        <div className="principal-list-screen">
          <div className="title-list">
            <div className="img-title-list">
              <img src={chevron} alt="chevron" className="chevron" onClick={(e) => {e.preventDefault(); window.location.href="http://localhost:3000/calendario"}}/>
            </div>

            <h1>Lista detalhada de atividades</h1>
          </div>
          <div>
            <div className="card-list" style={
                     card0 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }>
              <div className="radio-btn-list" >
                <div className="circulo" onClick={() => (setRadio1(!radio1), setButton(true), setInfo(1))}>
                  {" "}
                  <div
                    className="circulo-inside"
                    style={
                      radio1 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="infos-card-list">
                <h1>Matemática Aplicada</h1>
                <h2>
                Atividade de Matemática sobre frações -<h2 style={{ marginLeft: 5 }}>04/05</h2>
                </h2>
              </div>
              <div className="estrela-list">
                <div className="estrela">
                  <img
                    src={estrela}
                    alt="estrela"
                    onClick={() => setShow(true)}
                  />{" "}
                </div>
              </div>
            </div>

            <div className="card-list" style={
                     card1 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }>
              <div className="radio-btn-list">
                <div className="circulo" onClick={() => (setRadio2(!radio2), setButton(true), setInfo(2))}>
                  {" "}
                  <div
                    className="circulo-inside"
                    style={
                      radio2 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="infos-card-list">
                <h1>Engenharia de Software</h1>
                <h2>
                Entrega de modelo físico do projeto -<h2 style={{ marginLeft: 10 }}>09/05</h2>
                </h2>
              </div>
              <div className="estrela-list">
                <div className="estrela">
                  <img
                    src={estrelabranca}
                    alt="estrela"
                    onClick={() => setShow(true)}
                  />{" "}
                </div>
              </div>
            </div>

            
            <div className="card-list" style={
                     card2 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }>
              <div className="radio-btn-list">
                <div className="circulo" onClick={() => setRadio3(!radio0)}>
                  {" "}
                  <div
                    className="circulo-inside"
                    style={
                      radio3 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="infos-card-list">
                <h1>Programação Orientada a Objeto</h1>
                <h2>
                Poder do Caos -<h2 style={{ marginLeft: 10 }}>  17/05</h2>
                </h2>
              </div>
              <div className="estrela-list">
                <div className="estrela">
                  <img
                    src={estrelavermelha}
                    alt="estrela"
                    onClick={() => setShow(true)}
                  />{" "}
                </div>
              </div>
            </div>
            <div className="card-list" style={
                     card3 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }>
              <div className="radio-btn-list">
                <div className="circulo" onClick={() => setRadio4(!radio0)}>
                  {" "}
                  <div
                    className="circulo-inside"
                    style={
                      radio4 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="infos-card-list">
                <h1>Programação Orientada a Objeto</h1>
                <h2>
                Poder do Caos -<h2 style={{ marginLeft: 10 }}>22/05</h2>
                </h2>
              </div>
              <div className="estrela-list">
                <div className="estrela">
                  <img
                    src={estrelaverde}
                    alt="estrela"
                    onClick={() => setShow(true)}
                  />{" "}
                </div>
              </div>
            </div>
            <div className="card-list" style={
                     card4 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }>
              <div className="radio-btn-list">
                <div className="circulo" onClick={() => setRadio5(!radio0)}>
                  {" "}
                  <div
                    className="circulo-inside"
                    style={
                      radio5 === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="infos-card-list">
                <h1>Programação Orientada a Objeto</h1>
                <h2>
                Poder do Caos -<h2 style={{ marginLeft: 10 }}>29/05</h2>
                </h2>
              </div>
              <div className="estrela-list">
                <div className="estrela">
                  <img
                    src={estrela}
                    alt="estrela"
                    onClick={() => setShow(true)}
                  />{" "}
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="footer-calendar-screen" style={
                     button === true
                        ? { display: "flex" }
                        : { display: "none" }
                    }>
            <button onClick={() => deleteCard(info)}>
              <h3>FINALIZADO</h3>
            </button>
          </div>
        <div
          className="modal"
          style={show === true ? { display: "block" } : { display: "none" }}
        >
          <div className="modal-calendar">
            <div className="modal-calendar-content">
              <div className="modal-calendar-header">
                <h2>Troque a cor da Prioridade</h2>
                <button className="close" onClick={() => setShow(false)}>
                  X
                </button>
              </div>
              <div className="body-modal-estrelas">
                <div className="list-estrela">
                  <div className="card-estrela">
                    <div className="radio-btn-list">
                      <div
                        className="circulo"
                        onClick={() => (
                          setEstrela0(!estrela0), changeEstrela(0)
                        )}
                      >
                        {" "}
                        <div
                          className="circulo-inside"
                          style={
                            estrela0 === true
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="info-estrela">
                      <img src={estrelabranca} alt="estrela" />{" "}
                      <h1>Nenhuma Prioridade</h1>
                    </div>
                  </div>
                  <div className="card-estrela">
                    <div className="radio-btn-list">
                      <div
                        className="circulo"
                        // onClick={() => (
                        //   setEstrela1(!estrela1), changeEstrela(1)
                        // )}
                      >
                        {" "}
                        <div
                          className="circulo-inside"
                          style={
                            estrela1 === true
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="info-estrela">
                      <img src={estrela} alt="estrela" />{" "}
                      <h1>Baixa Prioridade</h1>
                    </div>
                  </div>
                  <div className="card-estrela">
                    <div className="radio-btn-list">
                      <div
                        className="circulo"
                        // onClick={() => (
                        //   setEstrela2(!estrela2), changeEstrela(2)
                        // )}
                      >
                        {" "}
                        <div
                          className="circulo-inside"
                          style={
                            estrela2 === true
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="info-estrela">
                      <img src={estrelaverde} alt="estrela" />{" "}
                      <h1>Media Prioridade</h1>
                    </div>
                  </div>
                  <div className="card-estrela">
                    <div className="radio-btn-list">
                      <div
                        className="circulo"
                        // onClick={() => (
                        //   setEstrela3(!estrela3), changeEstrela(3)
                        // )}
                      >
                        {" "}
                        <div
                          className="circulo-inside"
                          style={
                            estrela3 === true
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="info-estrela">
                      <img src={estrelavermelha} alt="estrela" />{" "}
                      <h1>Alta Prioridade</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lista;
