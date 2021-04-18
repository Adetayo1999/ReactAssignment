import React from 'react'
import "./Todo.css";
function Todo({Icon , text , tag}) {
    return (
        <div  className="todo">
            <Icon />
          <p>{text}</p>
    <p>{tag}</p>
        </div>
    )
}

export default Todo
