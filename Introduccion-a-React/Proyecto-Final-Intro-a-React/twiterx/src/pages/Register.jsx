import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

function Register() {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!username || !password) {
      alert(
        "Completa todos los campos"
      );
      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const exists = users.find(
      user =>
        user.username === username
    );

    if (exists) {
      alert(
        "Ese usuario ya existe"
      );
      return;
    }

    const newUser = {
      username,
      password
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registro exitoso");

    navigate("/login");
  };

  return (
    <div className="container">

      <h1>🐧 TwitterX</h1>

      <h2>Crear Cuenta</h2>

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

        <button type="submit">
          Registrarme
        </button>

      </form>

      <br />

      <Link
        to="/login"
        className="link-btn home-btn"
      >
        Ya tengo cuenta
      </Link>

    </div>
  );
}

export default Register;