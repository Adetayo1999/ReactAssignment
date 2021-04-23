import React from 'react'
import Todo from './Todo';
import "./Activity.css";

function Activity() {
    return (
        <div className="activity">
            <div className="activity__top">
               <p>Recent Activity</p>
            </div>
           <div className="activity__bottom">
             <Todo date ="Date" description="Description" price="Amount"/>
             <Todo date="1/1/21" description="Sent" price="N100.00"/>
             <Todo date="2/2/21" description="Received" price="N200.00"/>
             <Todo  date="3/3/21" description="Sent" price="N300.00"/>
           </div>
        </div>
    )
}

export default Activity
