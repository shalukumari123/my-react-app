// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TodoApp from "../src/pages/todo-app/TodoApp";
import Footer from "../src/pages/Footer";
import Login from "../src/pages/Login";
import Contact from "../src/pages/Contact";
import HomePage from "../src/pages/HomePage";
import AgeCalculator from "../src/pages/AgeCalculator";

function RequireAuth({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />

        <Route
          path="/contact"
          element={
            <RequireAuth>
              <Contact />
            </RequireAuth>
          }
        />

        <Route
          path="/todo"
          element={
            <RequireAuth>
              <TodoApp />
            </RequireAuth>
          }
        />

        <Route
          path="/age-calculator"
          element={
            <RequireAuth>
              <AgeCalculator />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}