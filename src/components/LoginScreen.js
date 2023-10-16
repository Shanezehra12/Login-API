import React, { useState, Alert, useEffect } from "react";
import "./LoginScreen.css";
import axios from "axios";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "http://poswebapi.hemanical.com/api/Users/Login",
        {
          username: username,
          password: password,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

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

          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
