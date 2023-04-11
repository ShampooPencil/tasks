import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataInput, setDataInput] = useState([]);
  const [username, setUsername] = useState("");
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setAuthenticated(true)
        localStorage.setItem("authenticated", true);
        navigate("/dashboard")
// Note that when creating applications, one of the goals is 
// to give users the best experience. In this case, taking the user back 
// to the page they were on before redirecting them to the login page 
// improves user experience. You can do this by passing -1 to navigate like this, navigate (-1).

    }
  };


  const submitThis = () => {
    const info = { email: email, password: password };
    setDataInput([info]);
  };
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="loginContainer">
       <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      </form>
      <div>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        {/* <GoogleLogin onSuccess={() =>()} onError={() => ()} cookiePolicy='single-host-origin'/> */}
      </div>
    </div>
  );
}
