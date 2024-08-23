import React, { useState } from 'react';
import './Login.css'; 
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('worker'); 

  const navigate = useNavigate(); // Initialize navigate

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);

    const url = (userType === 'worker') ? 
      "http://localhost:8000/login_worker" : 
      "http://localhost:8000/login_user"; // Assuming different endpoint for 'client'

    const data = { username, password }; // Using username
    axios.post(url, data)
    .then((res) => {
       console.log(res.data);
       if(res.data.message){
          alert(res.data.message);
          if(res.data.token){
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            localStorage.setItem('userType', userType);
            navigate('/userpage'); // Redirect on successful login
          }
       }
    })
    .catch((error) => {
       console.error("There was an error during login:", error);
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="userType">Select User Type:</label>
        <select id="userType" value={userType} onChange={handleUserTypeChange}>
          <option value="worker">Worker</option>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
