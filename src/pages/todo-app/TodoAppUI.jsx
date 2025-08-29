import React from 'react'
import DeleteButton from "../../components/DeleteButton";
import EditButton from "../../components/EditButton";
import CompletedButton from "../../components/CompletedButton";
import AddButton from "../../components/AddButton";
import { useSelector } from 'react-redux';
import Header from '../Header';

const TodoAppUI = ({editId, setEditId, todoList, setTodoList, todoDetails, setTodoDetails}) => {
  const user=useSelector((state)=>state.auth.user)
  return (
    <>
    <Header/>
    
    <div className="todo-container">
      <h1 className="todo-title">TO-DO APP:{user}</h1>
      <h2 className="todo-subtitle">Add details here</h2>
      <div className="input-section">
        <input
          type="text"
          value={todoDetails}
          placeholder="Add task here..."
          onChange={(e) => setTodoDetails(e.target.value)}
        />
        <AddButton
          todoList={todoList}
          setTodoList={setTodoList}
          editId={editId}
          setEditId={setEditId}
          setTodoDetails={setTodoDetails}
          todoDetails={todoDetails}
        />
      </div>

      <div className="todo-list">
        {todoList.length === 0 ? (
          <p className="empty-text">No tasks added yet 🚀</p>
        ) : (
          todoList.map((data) => (
            <div
              className={`todo-item ${data.completed ? "completed" : ""}`}
              key={data.id}
            >
              <span className="task-text">{data.task}</span>
              <div className="btn-group">
                <CompletedButton
                  todoList={todoList}
                  setTodoList={setTodoList}
                  data={data}
                />
                <EditButton
                  setEditId={setEditId}
                  setTodoDetails={setTodoDetails}
                  data={data}
                />
                <DeleteButton
                  todoList={todoList}
                  setTodoList={setTodoList}
                  data={data.id}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  )
}

export default TodoAppUI
