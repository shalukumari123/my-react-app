import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../src/state-manage/AuthSlice";
// import store from '../src/store'

const Login = () => {
  const [username1, setUsername] = useState("");
  const [password1, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();
    
    dispatch(login({username:username1,password:password1}));
    navigate("/home"); 
      
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login Page</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username1}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password1}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
