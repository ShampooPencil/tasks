import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ViewTasks from "./ViewTasks";
// import clsx from "clsx";
export default function TaskSlicer() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
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
      setTaskName("");
      setDescription("");
      setInputClass("hideInput");
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
      <button className="showAddBtn" onClick={showTaskInputs}>
        +New Task
      </button>
      {setTaskInput ? FormTask() : ""}
      <div className="products-grid">
        {/* {loading && <Loader />} */}
        <ul>
          {tasks.map((task) => {
            return (
              <li>
                <ViewTasks key={task.id} details={task}></ViewTasks>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
