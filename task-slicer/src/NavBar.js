import { NavLink } from "react-router-dom";
import DarkTheme from "./DarkTheme";
//probably add props later on
export default function NavBar() {
  return (
    // under about 700px turn nav into a hamburger like with dropdown menu
    <>
      {/* <div className="navContainer"> */}
        <nav className="navContainer">
          <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/taskslicer" className="nav-link">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="cat"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-cat fa-w-16 fa-9x"
                      >
                        <g class="fa-group">
                          <path
                            fill="currentColor"
                            d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                            class="fa-secondary"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                            class="fa-primary"
                          ></path>
                        </g>
                      </svg>
                      <span class="link-text">Tasks</span>
                </NavLink>
                </li>

                <li class="nav-item">
                <NavLink to="/" className="nav-link">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="alien-monster"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
                    >
                      <g class="fa-group">
                        <path
                          fill="currentColor"
                          d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                          class="fa-secondary"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M160,320h64V224H160Zm192-96v96h64V224Z"
                          class="fa-primary"
                        ></path>
                      </g>
                    </svg>
                    <span class="link-text">Login/SignUp</span>
                  </NavLink>
              </li>
              <li className="nav-item">
                <DarkTheme />
              </li>
          </ul>
          {/* <DarkTheme /> */}
          </nav>
          {/* <NavLink to="/taskslicer" className="navLinks">
            <div className="taskSlicerFontName">TaskSlicer</div>
          </NavLink> */}
          {/* <NavLink to="/" className="navLinks">
            <div className="loginLinkPage">Login/SignUp</div>
          </NavLink> */}
         

      {/* </div> */}
    </>
  );
}
