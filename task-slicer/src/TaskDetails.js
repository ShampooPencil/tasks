import React, { useState, useEffect } from "react";

export default function TaskDetails(props){
    
    const {taskName, step, exitDetails, remindMe, dueDate,} = props;
    return(<>
        <h2>{props.taskName}</h2>
        <ul>
            <button>{step}</button>
        </ul>
        <br/>
        <br/>
        {exitDetails}




    </>)
}