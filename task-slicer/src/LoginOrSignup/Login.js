import React, { useState } from "react";

export function Login() {
  const [login, setLogin] = useState("");
  const [pass_word, setPassWord] = useState("");
  console.log(login);
  return (
    <>
      <div className="container2">
        <h2>TaskSlicer</h2>
        <span>email</span>
        <input
          className="login"
          type="text"
          name="email"
          placeholder="taskSlicer@gmail.com"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <span>password</span>
        <input
          className="password"
          type="text"
          name="password"
          placeholder="**********"
          value={pass_word}
          onChange={(event) => setPassWord(event.target.value)}
        />
        <br />
        <span>Forgot Password?</span> {/* add component ForgotPassword */}
        <span>Privacy</span> {/* add component Privacy */}
        <span>Sign-up</span>
      </div>
    </>
  );
}
