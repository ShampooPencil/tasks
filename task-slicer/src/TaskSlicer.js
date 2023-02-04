import React, { useState } from "react";

export default function TaskSlicer() {
  // First-Goal: this component is going to be the login/log out and signup component
  // (add those components later on this component)
  // const [login, setLogin] = useState("");
  // const [pass_word, setPassWord] = useState("");
  // console.log(login);
  return (
    <>
      {/* challenge: when first adding a task, show the task (or more) and remove the <p></p>  */}
      <div className="card">
        <p>No Tasks have added</p>
      </div>
    </>
  );
}
