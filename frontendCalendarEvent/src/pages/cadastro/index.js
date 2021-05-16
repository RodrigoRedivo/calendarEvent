import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { callAPi } from "../../helpers";
import logoImg from "../../assets/logo.svg";
import "./index.scss";

function Register() {
  let history = useHistory();

  const inputNome = useRef(null);
  const inputUser = useRef(null);
  const inputPass = useRef(null);

  const [loading, setLoading] = useState(false);

  function cadastrar() {
    const nome = inputNome.current.value;
    const email = inputUser.current.value;
    const senha = inputPass.current.value;

    if (email && senha) {
      setLoading(true);
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      };

      callAPi("http://localhost:8080/usuario", opts).then(() => {
        history.push("/login");
      });
    }
  }

  return (
    <>
      <section className="cadastro-component">
        <h1>Cadastro</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <input type="text" placeholder="Nome" ref={inputNome} />
            <input type="email" placeholder="email" ref={inputUser} />
            <input type="password" placeholder="senha" ref={inputPass} />
            <button onClick={cadastrar}>Criar conta</button>
          </>
        )}
        <Link to={{ pathname: "/login" }}>Voltar</Link>
      </section>
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>
    </>
  );
}

export default Register;
