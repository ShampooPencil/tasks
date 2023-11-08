import React, { useState, useEffect } from "react";
import ViewTasks from "./ViewTasks";
import TaskDetails from "./TaskDetails";
import { NavLink } from "react-router-dom";
import {DragDropContext, Droppable, Draggable, resetServerContext} from "react-beautiful-dnd";


export default function TaskSlicer() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks"));
  });
  
  const handleDragDrop = (results) => {
    const {source, destination, type} = results;

    if(!destination) return;

    if(source.droppableId === destination.droppableId && 
       source.index === destination.index
      )
      return

    if(type === 'group'){
      const reorderedTasks = [...tasks];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedTasks] = reorderedTasks.splice(sourceIndex, 1);
      reorderedTasks.splice(destinationIndex, 0, removedTasks);
      return setTasks(reorderedTasks);
    }
  }
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [showTaskInput, setTaskInput] = useState(false);
  const [details, setDetails] = useState("");
  const [showInputClass, setInputClass] = useState("hideInput");
  const [showDetails, setShowDetails] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const showCard = {display: "block", width: "100%", position: "fixed", border: "0.5vw solid black", zIndex: "10"}
  const hideCard = {display: "none"};
  
  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const handleClick = event => {
    // 👇️ toggle class on click
    // event.currentTarget.classList.toggle('animate__slideOutRight');

    // 👇️ add class on click
    event.currentTarget.classList.add('animate__slideOutRight');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  };

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
     setTasks([...tasks, {id: taskName.split(), name: taskName, description: description }]);
      
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
    setIsActive(true)
    console.log(id)
    setTasks(tasks.filter((task) => task !== null ))
    setTasks(tasks.filter((task) => task.id !== id))
  }
    
function openDetailsCard(){
  console.log(showDetails)
  if(showDetails === false){
    setShowDetails(true);
  }
  // const showCard = {display: "block", width: "100%", position: "fixed", border: "0.5vw solid black", zIndex: "10"}
 

 }
function closeDetails(){
 setShowDetails(false);
//  const hideCard = {display: "none"};
}
return (
    <>
      {/* testing if saveTasks saves if clicked on another link and go back to task page */}
      {/* <div>{saveTasks}</div> */}
      {/* <div className="taskSlicerContainer"> */}
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
         <DragDropContext onDragEnd={handleDragDrop}>
        <div className="taskContainer">
        <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div className="dndTaskContainer" {...provided.droppableProps} ref={provided.innerRef}>
        {tasks.filter(perTask => perTask !== null).map((task, index) => {
            return <>
            <div className='animate__slideOutRight taskItem'>
            <Draggable key={`${task.id}`} draggableId={`${task.id}`} index={index}>
            
            {(provided) => (
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
            <ViewTasks
                  key={task.id}
                  details={task}
                  onDeleteClick={handleDeleteTask}
                ></ViewTasks>
            {/* <div>
            <NavLink to="/taskdetails">
              <button>+Details</button>
            </NavLink>
            </div> */}
            </div>
            )}
            </Draggable>
            <button className="open-button" onClick={() => openDetailsCard()}>+Details</button>
              <div className="detailsCard" id="displayDetailsCard" style={(showDetails === true) ? showCard : hideCard}>
                <h2>{details.name}</h2>
                <ul>
                  <input id="taskDetails" onChange={details.detailsChange}></input>
                </ul>
                <button onClick={() => closeDetails()}>CLOSE DETAILS</button>
              </div>
           </div>
           </>
          })
          
          }
          {provided.placeholder}
          </div>
        )}
          </Droppable>
        </div>
        </DragDropContext>
        {/* {resetServerContext()} */}
    </>
  );
}
{/* <div className='animate__slideOutRight' onClick={addDetails}>
<ViewTasks
      key={task.id}
      details={task}
      onDeleteClick={handleDeleteTask}
    ></ViewTasks>
  </div> */}