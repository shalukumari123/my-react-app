import React from 'react'

const EditButton = ({ setEditId, setTodoDetails, data }) => {
    const editHandler = (data, id) => {
        setTodoDetails(data);
        setEditId(id);
    };
    return (
        <button className="edit-btn" onClick={() => editHandler(data.task, data.id)}>
            Edit
        </button>
    )
}

export default EditButton;
