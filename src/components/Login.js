import React, { useState, Alert, useEffect } from "react";
import "./LoginScreen.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate;

   useEffect(() => {
    if (localStorage.getItem("user-info")) {
      //navigate.push("/logout");
      console.log("LOgin successful ")
    }
  }, []);


  async function login() {
    console.warn(username, password);
    let res = await fetch("http://poswebapi.hemanical.com/api/Users/Login", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    let result = await res.json();
    localStorage.setItem("user-info", JSON.stringify(result));
  }

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              //value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              //value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to='/logout'>
            <button onClick={login}>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
