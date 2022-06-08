import React from "react";
import { Contact } from "../Contact/Contact.js";
import { TaskSlicer } from "../TaskSlicer/TaskSlicer.js";
import { Login } from "../LoginOrSignup/Login.js";

// import ReactDOM from 'react-dom';

export default function NavBar() {
  // let toggleCompDisplay = false;
  let showMainDisplay = (
    <div className="main-display">
      <TaskSlicer />
    </div>
  ); //display when one of comps display are clicked on
  let [taskSlicerDisplay, loginDisplay, contactDisplay] = [true, false, false];
  function handleTaskSlicerClick() {
    [taskSlicerDisplay, loginDisplay, contactDisplay] = [true, false, false];
    console.log(taskSlicerDisplay, loginDisplay, contactDisplay);
  }
  function handleLoginClick() {
    [taskSlicerDisplay, loginDisplay, contactDisplay] = [false, true, false];
    console.log(taskSlicerDisplay, loginDisplay, contactDisplay);
  }
  function handleContactClick() {
    [taskSlicerDisplay, loginDisplay, contactDisplay] = [false, false, true];
    console.log(taskSlicerDisplay, loginDisplay, contactDisplay);
  }
  function compareDisplay() {
    if (taskSlicerDisplay === true) {
      showMainDisplay = (
        <div className="main-display">
          <TaskSlicer />
        </div>
      );
    }
    if (loginDisplay === true) {
      showMainDisplay = (
        <div className="main-display">
          <Login />
        </div>
      );
    }
    if (contactDisplay === true) {
      showMainDisplay = (
        <div className="main-display">
          <Contact />
        </div>
      );
    }
    console.log(showMainDisplay);
  }
  function ShowMainCompDisplay() {
    return showMainDisplay;
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
          <button
            onClick={() => {
              handleTaskSlicerClick();
              compareDisplay();
            }}
          >
            TaskSlicer
          </button>{" "}
          |<button onClick={handleLoginClick}>Login</button> |
          <button onClick={handleContactClick}>Contact</button>
        </nav>
      </div>

      {/* Default component/home */}
      <div className="main-display">{ShowMainCompDisplay}</div>
    </>
  );

  return taskSlicerNavBar;
}
