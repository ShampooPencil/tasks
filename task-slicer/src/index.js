import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import TaskSlicer from "./TaskSlicer.js";
function App() {
  //toggle black or white theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(prefersDark); // either true or false (depending on your OS preference)
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container dark">
          <Routes>
            <Route path="/taskslicer" element={<TaskSlicer />}></Route>
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

createRoot(document.querySelector("#react-root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
