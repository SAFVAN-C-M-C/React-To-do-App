import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import {v4 as uuidv4} from 'uuid';
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();
export const TodoWrapper = () => {
    const [TodoList,setTodoList]=useState([])
    const addTodo=(todo)=>{
        setTodoList([...TodoList,
            {
                id:uuidv4(),
                task:todo,
                isCompleted:false,
                isEditing:false
            }
        ])
    }
    const deleteTodo=(id)=>{
        setTodoList(TodoList.filter(todo=>todo.id!==id));
    }
    const toggleComplete=(id)=>{
        setTodoList(TodoList.map((todo)=>todo.id ===id?{...todo,isCompleted:!todo.isCompleted}:todo))
    }
    const editTodo=(id)=>{
        setTodoList(TodoList.map((todo)=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask=(task,id)=>{
        setTodoList(TodoList.map((todo)=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
    return (
        <div className="TodoWrapper">
            <h1>To Do</h1>
            <TodoForm addTodo={addTodo}/>
            {
                TodoList.map((task,index)=>
                    (task.isEditing&& !task.isCompleted)?(
                        <EditTodoForm editTask={editTask} task={task}/>
                    ):
                    (
                        <Todo task={task} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} key={index}/>

                    )
                )
            }
        </div>
    );
};
