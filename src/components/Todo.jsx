import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons'
// import {} from ''
export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
    return (
        <div className={`${task.isCompleted?'completed-Todo':'Todo'}`}>
            <p onClick={()=>toggleComplete(task.id)}>{task.task}</p>
            <div>
                {!task.isCompleted && <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>}
                <FontAwesomeIcon onClick={()=>deleteTodo(task.id)} icon={faTrash}/>
            </div>
        </div>
    )
}
