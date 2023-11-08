// import DarkTheme from "./DarkTheme.js";
// import TaskSlicer from "./TaskSlicer.js";
import { NavLink } from "react-router-dom"
import TaskDetails from "./TaskDetails";


export default function ViewTasks(props) {
  const { details, onDeleteClick, theme, dropId} = props;
  // function handleDeleteTask(id) {
  //   removeTask(details.filter((product) => product.id !== id));
  // }
  // function addDetails(){
  //   console.log("Task Clicked!");
  //   <TaskDetails name={details.name}/>
  // }
  return (
    <>
    {/* <div className={`animate__animated animate__backInDown borderColor ${details.id}`} value={details.id}> */}
    {/* taskItem */}
    <div className={`borderColor ${details.id}`} value={details.id}>
      <label className="task-name">
        <input type="checkbox" />
        {details.name}
        <p className="task-description">{details.description}</p>
        <button onClick={() => onDeleteClick(details.id)}>remove</button>
      </label>
      
    </div>
   </>
  );
}
