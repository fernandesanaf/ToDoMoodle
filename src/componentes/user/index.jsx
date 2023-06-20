import React from "react";
import estrela from "./estrelabranca.svg";
import estrela2 from "./estrelaverde.svg";
import estrela3 from "./estrelavermelha.svg";

const Calendar = ({ data }) => {
  const currentDate = new Date();
  const [modal, setModal] = React.useState(false);
  const [id, setId] = React.useState();

  const renderIcons = (day) => {
    const hasData = data.find(
      (item) => new Date(item.dataEntrega).getDate() === day
    );

    if (hasData) {
      const dataEntregaDia = data.filter(
        (item) => new Date(item.dataEntrega).getDate() === day
      );

      return (
        <div>
          {dataEntregaDia.map((item) => {
            if (item.prioridade === "Alta") {
              return (
                <img
                  src={estrela3}
                  alt="estrela"
                  onClick={() => (setModal(!modal), setId(item.id))}
                />
              );
            } else if (item.prioridade === "Média") {
              return (
                <img
                  src={estrela2}
                  alt="estrela"
                  onClick={() => (setModal(!modal), setId(item.id))}
                />
              );
            } else if (item.prioridade === "Baixa") {
              return (
                <img
                  src={estrela}
                  alt="estrela"
                  onClick={() => (setModal(!modal), setId(item.id))}
                />
              );
            }
            return null;
          })}
        </div>
      );
    }

    return null;
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const calendarDays = [];
    const startDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<td key={`empty-${i}`} />);
    }

    let week = [];

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(
        <td key={day}>
          <span className="day-number">{day}</span>
          {renderIcons(day)}
        </td>
      );

      if (week.length === 7) {
        calendarDays.push(<tr key={day}>{week}</tr>);
        week = [];
      }
    }

    // Adicionar a última semana do mês, se necessário
    if (week.length > 0) {
      calendarDays.push(<tr key="last-week">{week}</tr>);
    }

    return calendarDays;
  };

  return (
    <div className="calendar">
      <div className="calendario-mes">
        <div className="calendario-mes1">
          <h2>Junho</h2>
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
                  <td>SÁB</td>
                </tr>
              </thead>
              <div className="border-body-calendar"></div>
              <tbody>{renderCalendar()}</tbody>
            </table>
          </div>
        </div>
        <div
          className="modal"
          style={modal === true ? { display: "block" } : { display: "none" }}
        >
          <div className="modal-calendar">
            <>
              {data.map((item) => {
                let datetime = new Date(item.dataEntrega);
                const formattedDatetime = datetime.toLocaleString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
    
                return item.id == id ? (
                  <div className="modal-calendar-content">
                    <div className="modal-calendar-header">
                      <h2 id="h2-modal-calendar">{item.nomeAtividade}</h2>
                      <button className="close" onClick={() => setModal(false)}>
                        X
                      </button>
                    </div>
                    <div className="modal-calendar-body">
                      <div className="infos">
                        <h3>Matéria: </h3>
                        <p>{item.nomeMateria}</p>
                      </div>
                      <div className="infos">
                        <h3>Descrição: </h3>
                        <p>{item.descricao}</p>
                      </div>
                      <div className="infos">
                        <h3>Entrega: </h3>
                        <p>{formattedDatetime}</p>
                      </div>

                      <div className="infos">
                        <h3>Status: </h3>
                        <p>{item.status}</p>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
