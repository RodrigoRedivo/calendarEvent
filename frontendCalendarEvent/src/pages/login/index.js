import { useRef, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../components/auth-provider/contex.js";
import logoImg from "../../assets/logo.svg";
import "./index.scss";

function Login() {
  let history = useHistory();

  const AuthProvider = useContext(AuthContext);
  const inputUser = useRef(null);
  const inputPass = useRef(null);
  const [loading, setLoading] = useState(false);

  function login() {
    const email = inputUser.current.value;
    const senha = inputPass.current.value;

    if (email && senha) {
      setLoading(true);
      AuthProvider.login({
        email,
        senha,
      })
        .then(() => {
          history.push("/");
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }
  }

  return (
    <>
      <section className="login-component">
        <h1>Faça seu Login</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <input type="text" placeholder="usuário" ref={inputUser} />
            <input type="password" placeholder="senha" ref={inputPass} />
            <button onClick={login}>Logar</button>
          </>
        )}
        <Link to={{ pathname: "/cadastro" }}>Criar cadastro</Link>
      </section>
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>
    </>
  );
}

export default Login;
