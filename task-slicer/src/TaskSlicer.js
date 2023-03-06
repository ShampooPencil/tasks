import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ViewTasks from "./ViewTasks";
// import clsx from "clsx";
export default function TaskSlicer() {
  const [saveTasks, setSaveTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks"));
  });
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [addBtn, setAddBtn] = useState(true);
  const [showTaskInput, setTaskInput] = useState(false);
  const [showInputClass, setInputClass] = useState("hideInput");

  useEffect(() => {
    console.log(saveTasks);
    return localStorage.setItem("tasks", JSON.stringify(saveTasks));
  }, [saveTasks]);

  function FormTask() {
    // useEffect(() => {
    //   console.log(saveTasks);
    //   return localStorage.setItem("tasks", JSON.stringify(tasks));
    // }, [saveTasks]);
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
      setSaveTasks((current) => [
        ...current,
        { id: tasks.length, name: taskName, description: description },
      ]);
      console.log(saveTasks);
      setTaskName("");
      setDescription("");
      setInputClass("hideInput");
    }
    return (
      <div>
        <input
          className={showInputClass}
          id="taskName"
          type="text"
          placeholder="Task"
          value={taskName}
          onChange={handleNameChange}
        />
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
          value="+"
          onClick={taskName && description !== "" ? handleTaskSubmit : ""}
        />
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
      {/* testing if saveTasks saves if clicked on another link and go back to task page */}
      {/* <div>{saveTasks}</div> */}
      <button className="showAddBtn" onClick={showTaskInputs}>
        +New Task
      </button>
      {setTaskInput ? FormTask() : ""}
      <div className="products-grid">
        {/* {loading && <Loader />} */}

        {/* {tasks.map((task) => {
          return (
            <div>
              <ViewTasks key={task.id} details={task}></ViewTasks>
            </div>
          );
        })} */}

        {/* 3/6/23
          -adds a tasks, clicks on login page, goes back to taskSlicer page, and is still saved
          -when submitting tasks, it show the div and checkbox but not the text of task
          so that my next challenge.
         */}
        {saveTasks.map((task) => {
          return (
            <div>
              <ViewTasks key={task.id} details={task}></ViewTasks>
            </div>
          );
        })}
      </div>
    </>
  );
}
