//19.👉 Practice: Manage a todo list with useReducer.
import React, { useReducer, useState } from "react";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []); // state + reducer
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List (useReducer)</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: "10px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
