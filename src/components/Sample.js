import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sample = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://poswebapi.hemanical.com/api/Users/Login/" +
      username +
      "/" +
      password +
      "");
      if (response.status === 200) {
        // Successful login, navigate to the success page
        // You can also save a token or session here
      } else {
        // Handle login failure
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Link to='/logout'>
      <button onClick={handleSubmit}>Login</button>

      </Link>
    </div>
  );
};

export default Sample;
