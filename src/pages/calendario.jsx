import React from "react";
import "../style/calendario.css";
import "../style/modal.css";
import estrela from "../images/estrela.svg";
import estrelavermelha from "../images/estrelavermelha.svg";
import estrelaverde from "../images/estrelaverde.svg";
import estrelabranca from "../images/estrelabranca.svg";

function Calendario() {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);

  return (
    <div className="calendario-screen">
      <div className="principal-calendar-screen">
        <div className="title-calendar">
          <h2>
            Olá Ana Fernandes,
            <br /> Estas são as atividades programadas para o mês:
          </h2>
        </div>
        <div className="body-calendar">
          <div className="calendario-mes">
            <div className="title-body">
              <h2>MAIO</h2>
            </div>
            <div className="body-screen">
              <div className="calendario">
                <table>
                  <thead>
                    <tr>
                      <td>DOM</td>
                      <td>SEG</td>
                      <td>TER</td>
                      <td>QUA</td>
                      <td>QUI</td>
                      <td>SEX</td>
                      <td>SAB</td>
                    </tr>
                  </thead>
                  <div className="border-body-calendar"></div>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <div className="day-calendar">1</div>
                      </td>
                      <td>
                        <div className="day-calendar">2</div>
                      </td>
                      <td>
                        <div className="day-calendar">3</div>
                      </td>
                      <td>
                        <div className="day-calendar">4</div>
                        <img
                          src={estrela}
                          alt="estrela"
                          onClick={() => setShow(true)}
                        />
                      </td>
                      <td>
                        <div className="day-calendar">5</div>
                      </td>
                      <td>
                        <div className="day-calendar">6</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="day-calendar">7</div>
                      </td>
                      <td>
                        <div className="day-calendar">8</div>
                      </td>
                      <td>
                        <div className="day-calendar">9</div>
                        <img src={estrelabranca} alt="estrela" onClick={() => setShow4(true)}/>
                      </td>
                      <td>
                        <div className="day-calendar">10</div>
                      </td>
                      <td>
                        <div className="day-calendar">11</div>
                      </td>
                      <td>
                        <div className="day-calendar">12</div>
                      </td>
                      <td>
                        <div className="day-calendar">13</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="day-calendar">14</div>
                      </td>
                      <td>
                        <div className="day-calendar">15</div>
                      </td>
                      <td>
                        <div className="day-calendar">16</div>
                      </td>
                      <td>
                        <div className="day-calendar">17</div>
                        <img src={estrelavermelha} alt="estrela" onClick={() => setShow1(true)} />
                      </td>
                      <td>
                        <div className="day-calendar">18</div>
                      </td>
                      <td>
                        <div className="day-calendar">19</div>
                      </td>
                      <td>
                        <div className="day-calendar">20</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="day-calendar">21</div>
                      </td>
                      <td>
                        <div className="day-calendar">22</div>
                        <img src={estrelaverde} alt="estrela" onClick={() => setShow2(true)}/>
                      </td>
                      <td>
                        <div className="day-calendar">23</div>
                      </td>
                      <td>
                        <div className="day-calendar">24</div>
                      </td>
                      <td>
                        <div className="day-calendar">25</div>
                      </td>
                      <td>
                        <div className="day-calendar">26</div>
                      </td>
                      <td>
                        <div className="day-calendar">27</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="day-calendar">28</div>
                      </td>
                      <td>
                        <div className="day-calendar">29</div>
                        <img src={estrela} alt="estrela" onClick={() => setShow3(true)}/>
                      </td>
                      <td>
                        <div className="day-calendar">30</div>
                      </td>
                      <td>
                        <div className="day-calendar">31</div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <div className="footer-calendar-screen">
            <button onClick={(e) => {e.preventDefault(); window.location.href="http://localhost:3000/lista"}}>
              <h3>DETALHES</h3>
            </button>
          </div> */}
        </div>
      </div>
      <div
        className="modal"
        style={show === true ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-calendar">
          <div className="modal-calendar-content">
            <div className="modal-calendar-header">
              <h2>Atividade - 04/05/202</h2>
              <button className="close" onClick={() => setShow(false)}>X</button>
            </div>
            <div className="modal-calendar-body">
              <div className="infos">
                <h3>Atividade: </h3>
                <p>Atividade de Matemática Aplicada</p>
              </div>
              <div className="infos">
                <h3>Descrição: </h3>
                <p>Atividade de Matemática sobre frações</p>
              </div>
              <div className="infos">
                <h3>Horário: </h3>
                <p>14:00</p>
              </div>

              <div className="infos">
                <h3>Local de Entrega: </h3>
                <p>Moodle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        style={show4 === true ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-calendar">
          <div className="modal-calendar-content">
            <div className="modal-calendar-header">
              <h2>Prova - 09/05/2023</h2>
              <button className="close" onClick={() => setShow4(false)}>X</button>
            </div>
            <div className="modal-calendar-body">
              <div className="infos">
                <h3>Prova: </h3>
                <p>Engenharia de Software</p>
              </div>
              <div className="infos">
                <h3>Descrição: </h3>
                <p>Entrega de modelo físico do projeto</p>
              </div>
              <div className="infos">
                <h3>Horário: </h3>
                <p>18:00</p>
              </div>

              <div className="infos">
                <h3>Local de Entrega: </h3>
                <p>Moodle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        style={show1 === true ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-calendar">
          <div className="modal-calendar-content">
            <div className="modal-calendar-header">
              <h2>Atividade Prática - 17/05/2021</h2>
              <button className="close" onClick={() => setShow1(false)}>X</button>
            </div>
            <div className="modal-calendar-body">
              <div className="infos">
                <h3>Atividade Prática: </h3>
                <p>Laboratório de Programação Orientada a Objeto</p>
              </div>
              <div className="infos">
                <h3>Descrição: </h3>
                <p>Poder do Caos </p>
              </div>
              <div className="infos">
                <h3>Horário: </h3>
                <p>23:59</p>
              </div>

              <div className="infos">
                <h3>Local de Entrega: </h3>
                <p>Moodle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        style={show2 === true ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-calendar">
          <div className="modal-calendar-content">
            <div className="modal-calendar-header">
              <h2>Atividade Prática Diária- 22/05/2021</h2>
              <button className="close" onClick={() => setShow2(false)}>X</button>
            </div>
            <div className="modal-calendar-body">
              <div className="infos">
                <h3>Atividade Prática: </h3>
                <p>Programação Orientada a Objeto</p>
              </div>
              <div className="infos">
                <h3>Descrição: </h3>
                <p>Poder do Caos </p>
              </div>
              <div className="infos">
                <h3>Horário: </h3>
                <p>23:59</p>
              </div>

              <div className="infos">
                <h3>Local de Entrega: </h3>
                <p>Moodle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        style={show3 === true ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-calendar">
          <div className="modal-calendar-content">
            <div className="modal-calendar-header">
              <h2>Atividade - 29/05/2021</h2>
              <button className="close" onClick={() => setShow3(false)}>X</button>
            </div>
            <div className="modal-calendar-body">
              <div className="infos">
                <h3>Atividade: </h3>
                <p>Programação Orientada a Objeto</p>
              </div>
              <div className="infos">
                <h3>Descrição: </h3>
                <p>Poder do Caos </p>
              </div>
              <div className="infos">
                <h3>Horário: </h3>
                <p>23:59</p>
              </div>

              <div className="infos">
                <h3>Local de Entrega: </h3>
                <p>Moodle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendario;
