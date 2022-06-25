import React, { useState } from "react";

export function TaskSlicer() {
  //First-Goal: this component is going to be the login/log out and signup component
  //(add those components later on this component)
  const [login, setLogin] = useState("");
  const [pass_word, setPassWord] = useState("");
  console.log(login)
  console.log(pass_word)
  return (
    <>
      <div className="container2">
        <h2>TaskSlicer</h2>
        <input className="login" type="text" name="email" value={login} onChange={event => setLogin(event.target.value)} />
        <input className="password" type="text" name="email" value={pass_word} onChange={event => setPassWord(event.target.value)} />
      </div>

    </>
  );
}
