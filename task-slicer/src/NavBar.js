import { NavLink } from "react-router-dom";
import DarkTheme from "./DarkTheme";
//probably add props later on
export default function NavBar() {
  return (
    <>
      {/* <div className="navContainer"> */}
        <nav className="navContainer">
          <DarkTheme />
          <NavLink to="/" className="navLinks">
            <div className="loginLinkPage">Login/SignUp</div>
          </NavLink>
          <NavLink to="/taskslicer" className="navLinks">
            <div className="taskSlicerFontName">TaskSlicer</div>
          </NavLink>
        </nav>
      {/* </div> */}
    </>
  );
}
