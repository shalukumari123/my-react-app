import React from "react";

const DeleteButton = ({todoList,setTodoList,data}) => {
    const deleteHandler = (id) => {
        const updated = todoList.filter((d) => d.id !== id);
        setTodoList(updated);
    };
    return (
        <button className="delete-btn" onClick={() => deleteHandler(data)}>
            Delete
        </button>
    );
};

export default DeleteButton;
