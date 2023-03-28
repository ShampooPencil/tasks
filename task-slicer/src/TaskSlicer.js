import React, { useState, useEffect } from "react";
import ViewTasks from "./ViewTasks";
export default function TaskSlicer() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks"));
  });
  // const [updateIds, setId] = useState(() => {
  //   return JSON.parse(localStorage.getItem("updateIds"));
  // });
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [showTaskInput, setTaskInput] = useState(false);
  const [showInputClass, setInputClass] = useState("hideInput");
  
  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // useEffect(() => {
  //   console.log(updateIds);
  //   localStorage.setItem("updateIds", JSON.stringify(updateIds))
  // }, [updateIds]);
  

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
      // let arr = taskName.split(' ')
      // setId([...updateIds, arr[0][1]]);
      setTasks([...tasks, {id: taskName.split(), name: taskName, description: description }]);
      
      setTaskName("");
      setDescription("");
      setInputClass("hideInput");
      // let obj = tasks.find(o => o.id.value());
      
      // console.log(obj);

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
      setInputClass("showInput");
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
    // let updatedId = 0;
    setTasks(tasks.filter((task) => task !== null ))
    setTasks(tasks.filter((task) => task.id !== id))
    // setTasks(tasks.map(el => el.id >= 0 ? {
    //   ...el,
    //   id: updatedId++ // the new title
    // } : el));
    // console.log(newData)
    // setTasks([newData])

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
      <div className="container">
        <div className="taskContainer">
        {tasks.filter(perTask => perTask !== null).map((task) => {
            return <>
            {/* <div className="borderColor"> */}
            <ViewTasks
                  key={task.id}
                  details={task}
                  onDeleteClick={handleDeleteTask}
                ></ViewTasks>
              {/* </div> */}
            </>
          })
          }
        </div>
      </div>
    </>
  );
}

