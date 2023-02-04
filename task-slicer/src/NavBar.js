import { useState } from "react";
import { NavLink } from "react-router-dom";

//probably add props later on
export default function NavBar() {
  return (
    <>
      <div>
        <nav className="navContainer">
          <NavLink to="/" className="navLinks">
            Home
          </NavLink>
          <NavLink to="/contact" className="navLinks">
            Contact
          </NavLink>
          <NavLink to="/taskslicer" className="navLinks">
            TaskSlicer
          </NavLink>
        </nav>
      </div>
    </>
  );
}
