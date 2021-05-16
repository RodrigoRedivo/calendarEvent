import { useEffect, useState } from "react";
import { EventItem } from "../index";
import { callAPi } from "../../helpers";
import "./index.scss";

function Events() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    callAPi("http://localhost:8080/eventos").then((result) => {
      setEventList(result);
    });
  }, []);

  return (
    <ul className="events-component">
      <h2>Editar/Excluir</h2>
      <label>Descrição</label>
      <label>Inicio</label>
      <label>Fim</label>
      {eventList.map((event) => (
        <EventItem event={event} />
      ))}
      {eventList.length === 0 && <p>Não há eventos cadastrados</p>}
    </ul>
  );
}

export default Events;
