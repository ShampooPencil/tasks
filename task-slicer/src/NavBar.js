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
            Interview
          </a>{" "}
          |<a href="https://www.geeksforgeeks.org/gate-cs-notes-gq/">Gate</a> |
          <a href="https://www.geeksforgeeks.org/data-structures/">
            Data Structure
          </a>{" "}
          |
          <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
            Algorithm
          </a>
        </nav>
      </div>
    </>
  );

  return taskSlicerNavBar;
}
