import React from "react";
import { TaskSlicer } from "../TaskSlicer/TaskSlicer.js";
// import TaskSlicer from "./TaskSlicer/TaskSlicer.js";
// import LoginOrSignup from "LoginOrSignup/LoginOrSignup.js";
// import Contact from "Contact/Contact.js";

// import ReactDOM from 'react-dom';

export default function NavBar() {
  function handleTaskSlicerClick() {
    return <TaskSlicer />;
  }

  //probably add props later on
  const taskSlicerNavBar = (
    <>
      <div className="navContainer">
        <nav>
          <a
            href="https://www.geeksforgeeks.org/company-interview-corner/"
            onClick={handleTaskSlicerClick}
          >
            TaskSlicer
          </a>{" "}
          |
          <a href="https://www.geeksforgeeks.org/data-structures/">
            Login/Sign-Up
          </a>{" "}
          |
          <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
            Contact
          </a>
        </nav>
      </div>

      {/* Defualt component/home */}
      <TaskSlicer />
    </>
  );

  return taskSlicerNavBar;
}
