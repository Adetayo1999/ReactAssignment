import React from 'react'
import "./Todo.css";
function Todo({date , description , price}) {
    return (
        <div  className="todo">
           <p>{date}</p>
    <p>{description}</p>
    <p>{price}</p>
        </div>
    )
}

export default Todo
