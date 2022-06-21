import React from 'react';
import "./App.css";
import NavBar from "./Navbar/NavBar.js";

// **********************************************************
// *                                                        *
// *    flex-boxes cheatsheets keyboard shortcut is ctrl+;  *
// *                                                        *
// **********************************************************

// **********************************************************
// *                                                        *
// * THIS SITE IS SIMPLE! DONT OVER-COMPLECATE THE SITE! ONE GOAL AND A TIME!                                                       *
// *                                                        *
// **********************************************************
//THIS SITE IS SIMPLE! DONT OVER-COMPLECATE THE SITE! ONE GOAL AND A TIME!*****
//FIRST MAIN GOAL:
//1. CREATE PROFILE SECTION (MAKE IT SIMPLE)
//2. BASICALLY, THE ONLY THING THE MAIN PROFILE WITH SHOW AND USE IS THE TASK CARD
//3. ON THE PROFILE TASK CARD: MAKE THE CARD SO THE USER CAN ADD A TASK
//   AND REMOVE A TASK(FINISH ADDING TASK FIRST THEN REMOVE AFTER)
//4. AFTER THOSE ARE COMPLETED...RESEARCH ON TO ADD A SIMPLE USER NAME/EMAIL AND
//  PASSWORD AND USER IS SIGN-UP AND LOGGED-IN.(AFTER RESEARCH AND STUDY HOW TO
//   *SAVE* THE USERNAME/EMAIL AND PASSWORD SO IT IS STORED IN THE SITE)
//5. DONT WORRY ABOUT STYLE YET. JUST WORK ON THE STRUCTURE OF THE SITE AND CORE OF SITE!

function App() {
  return (
    <>
      <div className='container'>
        <div className='card'>
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default App;
