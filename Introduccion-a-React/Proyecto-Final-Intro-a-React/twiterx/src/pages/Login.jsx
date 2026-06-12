import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

function Login({ onLogin }) {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const foundUser = users.find(
      user =>
        user.username === username &&
        user.password === password
    );

    if (foundUser) {

      onLogin(foundUser.username);

      navigate("/");

    } else {

      setError(
        "Usuario o contraseña incorrectos"
      );
    }
  };

  return (
    <div className="container">

      <h1>🐧 TwitterX</h1>

      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e)=>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <button type="submit">
          Entrar
        </button>

      </form>

      <br />

      <Link
        to="/register"
        className="link-btn profile-btn"
      >
        Crear Cuenta
      </Link>

    </div>
  );
}

export default Login;