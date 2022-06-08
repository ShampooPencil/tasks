import React from "react";
import { TaskSlicer } from "../TaskSlicer/TaskSlicer.js";
import { Login } from "../LoginOrSignup/Login.js";
// import Contact from "Contact/Contact.js";

// import ReactDOM from 'react-dom';

export default function NavBar() {
  let toggleCompDisplay = false;
  function handleTaskSlicerClick() {
    toggleCompDisplay = false;
  }
  function handleLoginClick() {
    toggleCompDisplay = true;
  }

  //6/7/2022 8pm
  //Next time: Try to figure out a system so I can click a NavBar button and
  //the correct JSX component file will show on screen. I am using the TaskSlicer's
  // JSX file as a default when site is opened at the beginning
  //IF I dont have time to actually work on site on pc when free time to think
  // write some code on paper! or paper talk about on a recorder etc.

  //probably add props later on
  const taskSlicerNavBar = (
    <>
      <div className="navContainer">
        <nav>
          <button onClick={handleTaskSlicerClick}>TaskSlicer</button> |
          <button onClick={handleLoginClick}>Login</button> |
          <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
            Contact
          </a>
        </nav>
      </div>

      {/* Default component/home */}
      {toggleCompDisplay ? <Login /> : <TaskSlicer />}
    </>
  );

  return taskSlicerNavBar;
}
