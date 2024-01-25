import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState();
  const handleSubmit=(e)=>{
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        className="todo-input"
        placeholder="Whats the task today?"
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};
