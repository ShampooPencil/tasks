import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataInput, setDataInput] = useState([]);

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
      <form className="formContainer" action="" onSubmit={submitThis}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="passw"
            id="passw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit">Login</button>
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
