import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ViewTasks from "./ViewTasks.js";
// import clsx from "clsx";
export default function TaskSlicer() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState([]);
  const [description, setDescription] = useState([]);
  const [addBtn, setAddBtn] = useState(true);
  const [showTaskInput, setTaskInput] = useState(false);
  const [showInputClass, setInputClass] = useState("hideInput");

  function FormTask() {
    // const handleSubmit = (event) => {
    //   console.log("Task was submitted!");
    // };
    useEffect(() => {
      console.log(tasks);
    }, [tasks]);

    function onSubmit(e) {
      e.preventDefault();
    }
    function handleNameChange(e) {
      setTaskName(e.target.value);
      console.log(taskName);
      // setValidation(0)
    }
    function handleDescriptionChange(e) {
      setDescription(e.target.value);
      console.log(description);
    }
    function handleTaskSubmit() {
      setTasks((current) => [
        ...current,
        ...[{ id: tasks.length, name: taskName, description: description }],
      ]);
      setTaskName([]);
      setDescription([]);
      setInputClass("hideInput");
      // if(showInputClass === "showInput"){
      //   setInputClass("hideInput");
      // }else{
      //   setInputClass("showInput")
      // }


      //   setValidation(validate + 1)
    }
    function handleFormSubmit(e) {
      console.log(tasks);
      if (taskName === "" || description === "") {
        return e.preventDefault();
      } else {
        return handleTaskSubmit();
      }
    }
    return (
      <div>
        <input
          className={showInputClass}
          id="taskName"
          type="text"
          placeholder="Task"
          onChange={handleNameChange}
        />
        <input
          id="description"
          className={showInputClass}
          type="text"
          placeholder="Enter Description"
          onChange={handleDescriptionChange}
        />
        <input
          className={showInputClass}
          type="submit"
          value="+"
          onClick={handleTaskSubmit}
        />
        {/* <div className="products-grid">
          {/* {loading && <Loader />} */}
          {/* {taskName !== "" ? */}
          {/* <ul>
            {tasks.map((task) => {
              
              return (
                 <li><ViewTasks key={task.id} details={task}></ViewTasks></li>
              )
            })} */}
          {/* </ul> : ""} */} 
        {/* </div> */}
      </div>
    );
  }

  function showTaskInputs() {
    if (showTaskInput) {
      setTaskInput(false);
      // setAddBtn(false);
      setInputClass("showInput");
      console.log(addBtn);
      console.log(showTaskInput);
    } else {
      setTaskInput(true);
      setInputClass("showInput");
      console.log(showTaskInput);
    }
  }

  return (
    <>
      <div className="tasks-view">
        <button className="showAddBtn" onClick={showTaskInputs}>
          +New Task
        </button>
        {setTaskInput ? FormTask() : ""}
        <div className="products-grid">
          {/* {loading && <Loader />} */}
          {taskName !== "" ?
          <ul>
            {tasks.map((task) => {
              
              return (
                 <li><ViewTasks key={task.id} details={task}></ViewTasks></li>
              )
            })}
          </ul> : ""}
        </div>
      </div>
    </>
  );
}
