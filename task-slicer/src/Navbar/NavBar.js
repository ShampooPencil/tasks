import React from "react";
import { TaskSlicer } from "../TaskSlicer/TaskSlicer.js";
import { Login } from "../LoginOrSignup/Login.js";
// import Contact from "Contact/Contact.js";

// import ReactDOM from 'react-dom';

export default function NavBar() {
  function handleTaskSlicerClick() {
    <TaskSlicer />;
  }
  function handleLoginClick() {
    <Login />;
  }

  //probably add props later on
  const taskSlicerNavBar = (
    <>
      <div className="navContainer">
        <nav>
          <span onClick={handleTaskSlicerClick}>TaskSlicer</span> |
          <span onClick={handleLoginClick}>Login</span> |
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
