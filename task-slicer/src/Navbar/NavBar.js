import React from "react";
import { Contact } from "../Contact/Contact.js";
import { TaskSlicer } from "../TaskSlicer/TaskSlicer.js";
import { Login } from "../LoginOrSignup/Login.js";

// import ReactDOM from 'react-dom';

export default function NavBar() {
  let toggleCompDisplay = false;
  const [taskSlicerDisplay, loginDisplay, contactDisplay] = [
    true,
    false,
    false,
  ];
  function handleTaskSlicerClick() {
    [taskSlicerDisplay, loginDisplay, contactDisplay] = [true, false, false];
  }
  function handleLoginClick() {
    [taskSlicerDisplay, loginDisplay, contactDisplay] = [false, true, false];
  }
  function handleContactClick() {
    [taskSlicerDisplay, loginDisplay, contactDisplay] = [false, false, true];
  }
  function compareDisplay() {
    if (taskSlicerDisplay === true) {
      return (
        <div className="main-display">
          <TaskSlicer />
        </div>
      );
    }
    if (loginDisplay === true) {
      return (
        <div className="main-display">
          <Login />
        </div>
      );
    }
    if (contactDisplay === true) {
      return (
        <div className="main-display">
          <Contact />
        </div>
      );
    }
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
          <button onClick={handleContactClick}>Contact</button>
        </nav>
      </div>

      {/* Default component/home */}
      <div className="main-display">
        <TaskSlicer />
      </div>
    </>
  );

  return taskSlicerNavBar;
}
