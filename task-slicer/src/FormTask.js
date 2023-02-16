// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import ViewTasks from "./ViewTasks.js";

// export default function FormTask(props) {
//   const [tasks, setTasks] = useState([]);
//   const [taskName, setTaskName] = useState([]);
//   const [description, setDescription] = useState([]);

//   // const handleSubmit = (event) => {
//   //   console.log("Task was submitted!");
//   // };
//   useEffect(() => {
//     console.log(tasks);
//   }, [tasks]);

//   function onSubmit(e) {
//     e.preventDefault();
//   }
//   function handleNameChange(e) {
//     setTaskName(e.target.value);
//     console.log(taskName);
//     // setValidation(0)
//   }
//   function handleDescriptionChange(e) {
//     setDescription(e.target.value);
//     console.log(description);
//   }
//   function handleTaskSubmit() {
//     setTasks((current) => [
//       ...current,
//       ...[{ id: tasks.length, name: taskName, description: description }],
//     ]);
//     setTaskName([]);
//     setDescription([]);
//     //   setValidation(validate + 1)
//   }
//   function handleFormSubmit(e) {
//     console.log(tasks);
//     if (taskName === "" || description === "") {
//       return e.preventDefault();
//     } else {
//       return handleTaskSubmit();
//     }
//   }
//   return (
//     <div className="card">
//       <input
//         id="taskName"
//         type="text"
//         placeholder="Task"
//         onChange={handleNameChange}
//       />
//       <input
//         id="description"
//         type="text"
//         placeholder="Enter Description"
//         onChange={handleDescriptionChange}
//       />
//       <input type="submit" value="+" onClick={handleTaskSubmit} />
//       <div className="products-grid">
//         {/* {loading && <Loader />} */}
//         <ul>
//           {tasks.map((task) => {
//             return (
//               <li>
//                 <ViewTasks key={task.id} details={task}></ViewTasks>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
