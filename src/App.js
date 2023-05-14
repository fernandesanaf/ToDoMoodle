
import React from "react";
import "./style/login.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login.jsx";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router> */}
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
              <h2 style={{marginRight: 27}}>RA:</h2>
              <input />
            </div>

            <div className="insert-data-login">
              <h2 style={{marginRight: 5}}>Senha:</h2>
              <input />
            </div>
          </div>

        </div>
        <div className="button-login"><button>ENTRAR</button> </div>

      </div>
    </div>
  );
}

export default App;