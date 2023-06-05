import React from "react";
import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/login",
        { email: email, password: password },
        {
          withCredentials: true,
        }
      );
      const user_email = response.data.email;
      setUser(user_email);
      navigate("/profile");
    } catch (err) {
      if (!err?.response) {
        setError("No Server Response");
      } else if (err.response?.status === 400) {
        setError("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <main>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <div className="login-form">
            <h1>Login</h1>
            <div className="login-input">
              <FontAwesomeIcon className="input-icon" icon={faEnvelope} />
              <input
                name="email"
                type="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="login-input">
              <FontAwesomeIcon className="input-icon" icon={faKey} />
              <input
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            {error && <div className="error-msg">*{error}</div>}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
