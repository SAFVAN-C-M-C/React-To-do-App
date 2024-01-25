import React, { useState } from "react";

export const EditTodoForm = ({task,editTask}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit=(e)=>{
      e.preventDefault();
      editTask(value,task.id)
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
          Update Task
        </button>
      </form>
    );
}
