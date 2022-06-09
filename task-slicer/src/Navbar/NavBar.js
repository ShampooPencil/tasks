import React, { useState } from "react";
import { Contact } from "../Contact/Contact.js";
import { TaskSlicer } from "../TaskSlicer/TaskSlicer.js";
import { Login } from "../LoginOrSignup/Login.js";

// import ReactDOM from 'react-dom';

export default function NavBar() {
  const [showDisplay, setDisplay] = useState(<TaskSlicer />);

  function handleTaskSlicerClick() {
    const showTaskSlicer = <TaskSlicer />;
    setDisplay(showTaskSlicer);
    // return showDisplay;
  }

  function handleLoginClick() {
    const showLoginPage = <Login />;
    setDisplay(showLoginPage);
    console.log(showLoginPage);
    // return showDisplay;
  }
  function handleContactClick() {
    const showContactPage = <Contact />;
    setDisplay(showContactPage);
    // return showDisplay;
  }

  //6/7/2022 8pm
  //Next time: Try to figure out a system so I can click a NavBar button and
  //the correct JSX component file will show on screen. I am using the TaskSlicer's
  // JSX file as a default when site is opened at the beginning
  //IF I dont have time to actually work on site on pc when free time to think
  // write some code on paper! or paper talk about on a recorder etc.

  //probably add props later on
  function taskSlicerNavBar() {
    return (
      <>
        <div className="navContainer">
          <nav>
            <button onClick={handleTaskSlicerClick}>TaskSlicer</button> |
            <button onClick={handleLoginClick}>Login</button> |
            <button onClick={handleContactClick}>Contact</button>
          </nav>
        </div>

        {/* Default component/home */}
        <div className="main-display">{showDisplay}</div>
      </>
    );
  }

  return taskSlicerNavBar();
}
