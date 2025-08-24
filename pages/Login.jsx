import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Default credentials
  const defaultUser = {
    username: "admin",
    password: "12345",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === defaultUser.username && password === defaultUser.password) {
      setError("");
      alert("✅ Login Successful!");
      setIsLoggedIn(true);
      console.log('in login value saved to true')

      navigate("/home"); // redirect to home
    } else {
      setError("❌ Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login Page</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
