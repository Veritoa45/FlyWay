import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit ejecutado con:", email, password);

    if (!email.trim() || !password.trim()) {
      toast.error("Completa todos los campos");
      return;
    }

    const success = login(email, password);
    if (success) {
      toast.success("Sesión iniciada ✅");
      navigate("/");
    } else {
      toast.error("Credenciales inválidas ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <div className="input">
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Ingrese su mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input">
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="button2">Ingresar</button>
    </form>
  );
};

export default LoginForm;
