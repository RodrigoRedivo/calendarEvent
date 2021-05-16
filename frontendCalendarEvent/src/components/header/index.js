import { useContext } from "react";
import { Wrapper } from "../index.js";
import AuthContext from "../auth-provider/contex.js";
import { FiPower } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import "./index.scss";

function Header() {
  const AuthProvider = useContext(AuthContext);

  return (
    <header className="header-component">
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>
      <Wrapper>
        {AuthProvider.user && (
          <span>
            Olá, {AuthProvider.user.nome}
            <strong>Seja bem vindo</strong>
          </span>
        )}
        <div className="nav">
          <button onClick={AuthProvider.logout}>
            <FiPower />
          </button>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
