import React from "react";

const AddButton = ({todoList,setTodoList,todoDetails,setTodoDetails,setEditId,editId}) => {
  const addHandler = (todoDetails) => {
    if (editId) {
      if (todoDetails.trim() !== "") {
        const updated = todoList.map((d) =>
          d.id === editId ? { ...d, task: todoDetails } : d
        );
        setTodoList(updated);
        setTodoDetails("");
      }
      setEditId(null);
    } else {
      if (todoDetails.trim() !== "") {
        setTodoList([
          ...todoList,
          { id: Date.now(), task: todoDetails, completed: false },
        ]);
        setTodoDetails("");
      }
    }
  };
  return (
    <button className="add-btn" onClick={() => addHandler(todoDetails)}>
      {editId ? "Update" : "Add"}
    </button>
  );
};

export default AddButton;
