import React from "react";
import "../style/login.css";
import { Link } from "react-router-dom";


function Login() {

  

  return(
    <div>
    <div className="principal-login">
      <div className="title-login1">
        <div className="title-login2">
          <h1>TO DO MOODLE</h1>
        </div>
        <div className="subtitle-login">
          <h2>IFSP - Pirituba</h2>
        </div>
      </div>

      <div className="body-login">
        <button>Faça seu login pelo SUAP</button>
        <div className="inputs-login">
          <div className="insert-data-login">
            <h2 style={{ marginRight: 31 }}>RA:</h2>
            <input />
          </div>

          <div className="insert-data-login">
            <h2 style={{ marginRight: 3 }}>Senha:</h2>
            <input />
          </div>
        </div>
      </div>
      <div className="button-login">
       <button onClick={(e) => {e.preventDefault(); window.location.href="http://localhost:3000/calendario"}}><h2>ENTRAR</h2></button>
      </div>
    </div>
  </div>
  )
}
export default Login;
