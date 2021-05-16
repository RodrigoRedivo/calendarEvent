import { useState } from "react";
import { FiEdit, FiDelete } from "react-icons/fi";
import { callAPi } from "../../helpers";
import { EventEditItem } from "../index.js";

function EventItem({ event }) {
  const [edit, setEdit] = useState(null);

  function deletar(id) {
    const opts = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };

    callAPi("http://localhost:8080/eventos", opts).then(() => {
      window.location.reload();
    });
  }

  function editar() {
    setEdit(true);
  }

  function sairEditar() {
    setEdit(false);
  }

  if (edit) {
    return <EventEditItem event={event} onEditFinish={sairEditar} />;
  }

  return (
    <li key={event.id}>
      <span>{event.descricao} </span>
      <strong>Início: {event.inicio} </strong>
      <strong>Fim: {event.fim}</strong>
      <button onClick={editar}>
        <FiEdit />
      </button>
      <button
        onClick={() => {
          deletar(event.id);
        }}
      >
        <FiDelete />
      </button>
    </li>
  );
}

export default EventItem;
