import React, { useState, Alert, useEffect } from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*  useEffect(() => {
    if(localStorage.getItem("user-info")) {
      history.push("/add")
    }
  })  */

  ///////////////////////////////////////////////////////////////////////////////////////////
  const handleLogin = () => {
    fetch(
      "http://poswebapi.hemanical.com/api/Users/Login/" +
        username +
        "/" +
        password +
        ""
    )
      .then((response) => response.json())
      .then((data) => {
        // Check the response from the API
        if (data.success) {
          // Login successful, navigate to the next screen or perform necessary actions
        } else {
          // Login failed, show an error message
          Alert.alert(
            "Login Failed",
            "Please check your username and password."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  /* const handleLogin = () => {
    console.warn(username,password)
  } */
  /////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/logout">
            <button onClick={handleLogin}>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
