import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function TaskSlicer() {
  // const [task, setTasks] = useState([])
  // 2/4/23UPDATE: just work on the app itself and don't worry about logins or signups right nowFirst-Goal: this component is going to be the login/log out and signup component
  // (add those components later on this component)
  // const [login, setLogin] = useState("");
  // const [pass_word, setPassWord] = useState("");
  // console.log(login);

  return (
    <>
      {/* challenge: when first adding a task, show the task (or more) and remove the <p></p>  */}
      <div className="card">
        {/* 1. click on new tasks
            -create a function so the user can type its new task */}

        <NavLink to="/formtask" className="navLinks">
          <button>+New Task</button>
        </NavLink>

        {/* 2. create handle function so when click on add the task, it will store it to task state
             -test if new task is added to task state
             -might have to create a new state so task is immutable */}

        {/* 3. use a map similar method to show new tasks on the page */}
      </div>
    </>
  );
}
