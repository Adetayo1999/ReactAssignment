import React from 'react'
import "./Link.css";
import {Link} from "react-router-dom"
function Navigation({Home , text , path}) {
    return (
        <Link className="link" to={path}>
            <Home />
            <p>{text}</p>
        </Link>
    )
}

export default Navigation
