// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state-manage/AuthSlice"; // ← adjust path if needed

const Login = () => {
  const [username1, setUsername] = useState("");
  const [password1, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, isLoggedIn } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = username1.trim();
    const password = password1.trim();
    if (!username || !password) return; // basic guard
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login Page</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username1}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password1}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;