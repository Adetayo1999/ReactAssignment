import React from 'react';
import "./Viewer.css";
import {Avatar} from "@material-ui/core";
function Viewer() {
    return (
        <div className="viewer">
           <div className="container">
           <div className="viewer__left">
             <Avatar/>
             <h4>143.00</h4>
             <p>Balance</p>
            </div>
            <div className="viewer__right">
            <Avatar/>
             <h4>R21.00</h4>
             <p>Equivalent</p>
            </div>
           </div>
        </div>
    )
}

export default Viewer
