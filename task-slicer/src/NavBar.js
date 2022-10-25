import { useState } from "react";
import { Contact } from "./Contact.js";
import { TaskSlicer } from "./TaskSlicer.js";
import { Login } from "./Login.js";
import { QuickList } from "./QuickList";
// import "./App.css";
// import ReactDOM from 'react-dom';

export function NavBar() {
  const [showDisplay, setDisplay] = useState(<TaskSlicer />);

  function handleTaskSlicerClick() {
    const showTaskSlicer = <TaskSlicer />;
    setDisplay(showTaskSlicer);
  }

  function handleLoginClick() {
    const showLoginPage = <Login />;
    setDisplay(showLoginPage);
    console.log(showLoginPage);
  }
  function handleContactClick() {
    const showContactPage = <Contact />;
    setDisplay(showContactPage);
  }
  function handleQuickListClick() {
    const showQuickListPage = <QuickList />;
    setDisplay(showQuickListPage);
    console.log(showQuickListPage);
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
            ||<button onClick={handleTaskSlicerClick}>TaskSlicer</button> ||
            <button onClick={handleLoginClick}>Login</button> ||
            <button onClick={handleContactClick}>Contact</button> ||
            <button onClick={handleQuickListClick}>QuickList</button>||
          </nav>
        </div>

        {/*First: create a card-like Forum for Logging in/Loggin out
        and also signup under login
        (maybe draw or whiteboard the generally blueprints of it*/}
        <div>{showDisplay}</div>
      </>
    );
  }

  return taskSlicerNavBar();
}
