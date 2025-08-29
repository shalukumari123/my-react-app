import React, { useState, useEffect } from "react";
import "./TodoApp.css"; // Import CSS file
import TodoAppUI from "./TodoAppUI";

const TodoApp = () => {
  const [todoDetails, setTodoDetails] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodoList(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoAppUI editId={editId} setEditId={setEditId} todoList={todoList} setTodoList={setTodoList} todoDetails={todoDetails} setTodoDetails={setTodoDetails}/>
  );
};

export default TodoApp;
