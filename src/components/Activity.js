import React from 'react'
import Todo from './Todo';
import "./Activity.css";
import DescriptionIcon from "@material-ui/icons/Description";
function Activity() {
    return (
        <div className="activity">
            <div className="activity__top">
               <p>Recent Activity</p>
            </div>
           <div className="activity__bottom">
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
               <Todo Icon={DescriptionIcon} text="HIV Blood Draw Test" tag="A100" />
           </div>
        </div>
    )
}

export default Activity
