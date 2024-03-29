import React from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import autoAnimate from '@formkit/auto-animate'
import NavBar from "./NavBar.js";
import TaskSlicer from "./TaskSlicer.js";
import Login from "./Login";
import Signup from "./Signup";
import TaskDetails from './TaskDetails';
import axios from 'axios';
// import Dashboard from "./Dashboard";

/* 3/5/23
NEXT COUPLE OF CHALLENGES:
  -Going to first put login page as the home page.
  -store a list and put them in another page
    -probably going to make a new page that saves and stored the list that the users wants
     to keep with them
  -learn on to save data on a page so if it refreshes it still saves and shows on page
  -still dont worry to much of css grid etc ill do that in the end


*/

function App() {
  //toggle black or white theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(prefersDark); // either true or false (depending on your OS preference)
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> seeing if i can put navbar inside mainContent for grid purposes */}
        <div className="dark mainContent">
        <NavBar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            {/* <Route path="/" element={!session ? <Auth /> : <Account key={session.user.id} session={session} />}></Route> */}
            <Route path="/taskslicer" element={<TaskSlicer />}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/taskdetails" element={<TaskDetails/>}></Route>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
       </div>
      </BrowserRouter>
    </>
  );
}

// **********************************************************
// *                                                        *
// *    flex-boxes cheatsheets keyboard shortcut is ctrl+;  *
// *                                                        *
// **********************************************************

// Specific to this project: makes it possible for you to reload the page
const root = createRoot(document.querySelector("#react-root"));
const reload = () => {
  console.log("Page reloaded");
  root.render(
    <GoogleOAuthProvider clientId="860796429284-3n24j5fvo8bfk85r903acb1arvejf4pj.apps.googleusercontent.com">
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </GoogleOAuthProvider>
  );
};
reload();
// const button = document.createElement("button");
// button.textContent = "Reload page";
// button.addEventListener("click", reload);
// document.body.insertAdjacentElement("afterbegin", button);
