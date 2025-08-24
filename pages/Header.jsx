import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({isLoggedIn,setIsLoggedIn}) => {
  const navigate = useNavigate();
  console.log('in header outside :',isLoggedIn)
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
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </nav>

      {/* Login Button */}
      <button className="login-btn" onClick={() => {navigate("/"); isLoggedIn?setIsLoggedIn(false):setIsLoggedIn(true)}}>
        {isLoggedIn?'Logout':'Login'}
      </button>
    </header>
  );
};

export default Header;
