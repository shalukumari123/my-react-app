import React from "react";

const CompletedButton = ({todoList,setTodoList,data}) => {
    const completedHandler = (id, completed) => {
    const updated = todoList.map((d) =>
      d.id === id ? { ...d, completed: !completed } : d
    );
    setTodoList(updated);
  };
  return (
    <button
      className="success-btn"
      onClick={() => completedHandler(data.id, data.completed)}
    >
      {data.completed ? "Undo" : "Completed"}
    </button>
  );
};

export default CompletedButton;
