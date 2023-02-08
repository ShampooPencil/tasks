import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar.js";
import Contact from "./Contact.js";
import TaskSlicer from "./TaskSlicer.js";
import Home from "./Home.js";
// import DarkTheme from "./DarkTheme";
// import { Login } from "./Login.js";
// import { QuickList } from "./QuickList";
// **********************************************************
// *                                                        *
// *    flex-boxes cheatsheets keyboard shortcut is ctrl+;  *
// *                                                        *
// **********************************************************
function App() {
  //toggle black or white theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(prefersDark); // either true or false (depending on your OS preference)
  return (
    <>
      {/* <div className="card"> */}
      <BrowserRouter>
        {/* <DarkTheme /> */}
        <NavBar />
        <div className="container dark">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/taskslicer" element={<TaskSlicer />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* </div> */}
    </>
  );
}

// **********************************************************
// *                                                        *
// *    flex-boxes cheatsheets keyboard shortcut is ctrl+;  *
// *                                                        *
// **********************************************************

createRoot(document.querySelector("#react-root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
