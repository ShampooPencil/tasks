import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkTheme from "./DarkTheme";
//probably add props later on
export default function NavBar() {
  return (
    <>
      <div>
        <nav className="navContainer">
          <DarkTheme />
          <NavLink to="/taskslicer" className="navLinks">
            TaskSlicer
          </NavLink>
          <NavLink to="/contact" className="navLinks">
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}
