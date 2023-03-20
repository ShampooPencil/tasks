import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ViewTasks from "./ViewTasks";
export default function TaskSlicer() {
  // console.log(tasks?.tasks?.tasks);
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks"));
  });
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [addBtn, setAddBtn] = useState(true);
  const [showTaskInput, setTaskInput] = useState(false);
  const [showInputClass, setInputClass] = useState("hideInput");
  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function FormTask() {
    function handleNameChange(e) {
      setTaskName(e.target.value);
      console.log(taskName);
    }
    function handleDescriptionChange(e) {
      setDescription(e.target.value);
      console.log(description);
    }
    function handleTaskSubmit() {
      setTasks([...tasks, { id: tasks.length, name: taskName, description: description }]);
      setTaskName("");
      setDescription("");
      setInputClass("hideInput");
    }
    return (
      <div className="taskAddContainer">
        {/* input for inserting task name */}
        <input
          className={showInputClass}
          id="taskName"
          type="text"
          placeholder="Task"
          value={taskName}
          onChange={handleNameChange}
        />
        {/* input for inserting task name */}
        <input
          id="description"
          className={showInputClass}
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          className={showInputClass}
          type="submit"
          value="[+]"
          onClick={taskName && description !== "" ? handleTaskSubmit : ""}
        />
      </div>
    );
  }

  // basically a dropdown and show some inputs when user wants to start a new task
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
  

  // for deleting a task

  function handleDeleteTask(id) {
    console.log(id)
    setTasks(tasks.filter((task) => task !== null ))
    setTasks(tasks.filter((task) => task.id !== id))
    // localStorage.removeItem("tasks");
    
  }

  return (
    <>
      {/* testing if saveTasks saves if clicked on another link and go back to task page */}
      {/* <div>{saveTasks}</div> */}
      <div className="taskAddContainer">
        <button className="showAddBtn" onClick={showTaskInputs}>
          +New Task
        </button>
      </div>
      {setTaskInput ? FormTask() : ""}

      {/* 3/6/23
          -adds a tasks, clicks on login page, goes back to taskSlicer page, and is still saved
          -when submitting tasks, it show the div and checkbox but not the text of task
          so that my next challenge.
         */}
      <div className="taskContainer">
      {tasks.filter(perTask => perTask !== null).map((task) => {
          return <>
          <div>
          <ViewTasks
                key={task.id}
                details={task}
                onDeleteClick={handleDeleteTask}
              ></ViewTasks>
            </div>
          </>
        })
        }
      </div>
    </>
  );
}
