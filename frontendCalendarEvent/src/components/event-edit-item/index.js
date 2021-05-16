import { useRef } from "react";
import { callAPi } from "../../helpers";

function EventEditItem({ event, onEditFinish }) {
  let inputDesc = useRef(null);
  let inputIni = useRef(null);
  let inputFim = useRef(null);

  function salvar() {
    const descricao = inputDesc.current.value;
    const inicio = inputIni.current.value;
    const fim = inputFim.current.value;
    const id = event.id;

    const opts = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, descricao, inicio, fim }),
    };

    callAPi("http://localhost:8080/eventos", opts)
      .then(() => {
        onEditFinish();
        window.location.reload();
      })
      .catch();
  }

  return (
    <li>
      <input type="text" placeholder={event.descricao} ref={inputDesc} />
      <input type="datetime-local" placeholder={event.inicio} ref={inputIni} />
      <input type="datetime-local" placeholder={event.fim} ref={inputFim} />
      <button onClick={salvar}>Editar</button>
    </li>
  );
}

export default EventEditItem;
