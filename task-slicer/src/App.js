import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./NavBar.js";
import { Contact } from "./Contact.js";
import { TaskSlicer } from "./TaskSlicer.js";
import { Home } from "./Home.js";
// import { Login } from "./Login.js";
// import { QuickList } from "./QuickList";
// **********************************************************
// *                                                        *
// *    flex-boxes cheatsheets keyboard shortcut is ctrl+;  *
// *                                                        *
// **********************************************************
export default function App() {
  return (
    <>
      <div className="card">
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/taskslicer" element={<TaskSlicer />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
