//10/23/2022 For now (not knowing about logging in/logging out or
//signing-up or making a members profile and saving members in the site)
//just make a quick task page. More like a one go/not signed in the page idea. MAKE IT SIMPLE
//*GOALS*
//1. SHOW PLUS SIGN FIRST UNDER NAVBAR SO WHEN CLICKED, IT WILL HAVE TEXT-BOX AND USER CAN TYPE ITS TASKS/REMINDER
//2. WHEN FIRST TASKS IN COMPLETE AND SHOWED, HAVE MINUS SIGN ON THE RIGHT SIDE, AN EMPTY CIRCLE ON THE LEFT SIDE AND
//   PLUS SIGN ABOVE/OR BELOW(NOT SURE WHAT SIDE YET)
//........THATS WOULD BE A GOOD START AND ADD MORE GOALS/STEPS AS I GO AFTER ONE STEP IS DONE
import React, { useState, useEffect } from "react";

export function QuickList() {
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState();

  
  function handleAddTask() {
    //first problem: show plus(+) sign and when clicked on, input would pop-up.
    let addTask = prompt("Enter Task:");
    if (addTask !== null && addTask !== "") {
      setTask([...tasks, addTask]);
      console.log(tasks);
    }
  }
  function handleInputClick() {
    //this will be the onClick function when user clicks on plus sign first
    const taskInput = <input></input>;
    setInput(...input, taskInput);
  }

  return (
    <>
      <div className="container-quickList">
        {/*next time, make a new column container for the QuickList page */}
        <ul>
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
        <button className="addTask" onClick={handleAddTask}>
          +
        </button>
        {/*add map to show current task(s) 
         EXAMPLE:*******
         {transactions.map(
                (transaction, index) => <li key={index}>{transaction}</li>
          )}*/}
      </div>
    </>
  );
}
