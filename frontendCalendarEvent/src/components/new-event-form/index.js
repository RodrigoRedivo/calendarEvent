import { useRef, useState } from "react";
import { callAPi } from "../../helpers";
import "./index.scss";

function NewEventForm() {
  let inputDesc = useRef(null);
  let inputIni = useRef(null);
  let inputFim = useRef(null);

  const [loading, setLoading] = useState(false);

  function onFish() {
    setLoading(false);
    window.location.reload();
  }

  function salvar() {
    const descricao = inputDesc.current.value;
    const inicio = inputIni.current.value;
    const fim = inputFim.current.value;

    setLoading(true);

    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ descricao, inicio, fim }),
    };

    callAPi("http://localhost:8080/eventos", opts).then(onFish).catch(onFish);
  }

  return (
    <div className="new-event-component">
      <h2>Criar novo Evento</h2>
      {!loading && (
        <>
          <input type="text" placeholder="Descricao" required ref={inputDesc} />
          <input
            type="datetime-local"
            placeholder="Data de início"
            required
            ref={inputIni}
          />
          <input
            type="datetime-local"
            placeholder="Data de termino"
            required
            ref={inputFim}
          />
          <button onClick={salvar}>Salvar</button>
        </>
      )}
    </div>
  );
}

export default NewEventForm;
