import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import TaskSlicer from "./TaskSlicer.js";

export default function Dashboard(){
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);
return (<>
  {!authenticated ? <Navigate replace to="/login" /> : <div><p>Welcome to your Dashboard</p></div>}
</>)
//   if (!authenticated) {
//   // Redirect
//   } else {
//     return (
//       <div>
//         <p>Welcome to your Dashboard</p>
//       </div>
//     );
//   }
// };

// export default Dashboard;
}