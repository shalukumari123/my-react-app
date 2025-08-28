import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../src/state-manage/AuthSlice";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <header className="header">
      {/* Logo / Title */}
      <div className="logo" onClick={() => navigate("/")}>
        🚀 My React App
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/todo")}>Todo App</li>
          <li onClick={() => navigate("/age-calculator")}>Age Calculator</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>

        </ul>
      </nav>

      {/* Login Button */}
      <button className="login-btn" onClick={() => {navigate("/"); dispatch(logout())}}>
        Logout
      </button>
      
    </header>
  );
};

export default Header;
