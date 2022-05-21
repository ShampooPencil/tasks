import React from "react";
// import ReactDOM from 'react-dom';

export default function NavBar() {
  //probably add props later on
  const taskSlicerNavBar = (
    <>
      <div className="navContainer">
        <nav>
          <a href="https://www.geeksforgeeks.org/">Home</a> |
          <a href="https://www.geeksforgeeks.org/company-interview-corner/">
            How It Works
          </a>{" "}
          |
          <a href="https://www.geeksforgeeks.org/data-structures/">
            Login/Sign-Up
          </a>{" "}
          |
          <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
            Contact
          </a>
        </nav>
      </div>
    </>
  );

  return taskSlicerNavBar;
}
