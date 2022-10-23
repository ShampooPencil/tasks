import React, { useState } from "react";
import SignUp from "../LoginOrSignup/SignUp.js";
import Login from "../LoginOrSignup/Login.js";


export function TaskSlicer() {
  //First-Goal: this component is going to be the login/log out and signup component
  //(add those components later on this component)
  const [login, setLogin] = useState("");
  const [pass_word, setPassWord] = useState("");
  console.log(login);
  return (
    <>
      {/* 1. when first on site/app, login component renders(on TaskSlicer Compoenent)  */}
      <Login />
    </>
  );
}
