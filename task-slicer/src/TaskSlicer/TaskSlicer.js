import React, { useState } from "react";
import SignUp from "../LoginOrSignup/SignUp.js";

export function TaskSlicer() {
  //First-Goal: this component is going to be the login/log out and signup component
  //(add those components later on this component)
  const [login, setLogin] = useState("");
  const [pass_word, setPassWord] = useState("");
  console.log(login);
  console.log(pass_word);
  function handleSignUpClick() {}
  return (
    <>
      <div className="container2">
        <h2>TaskSlicer</h2>
        <span>email</span>
        <input
          className="login"
          type="text"
          name="email"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <span>password</span>
        <input
          className="password"
          type="text"
          name="password"
          value={pass_word}
          onChange={(event) => setPassWord(event.target.value)}
        />
        <br />
        <span>Forgot Password?</span> {/* add component ForgotPassword */}
        <span>Privacy</span> {/* add component Privacy */}
        <span onClick={handleSignUpClick}>Sign-up</span>
      </div>
    </>
  );
}
