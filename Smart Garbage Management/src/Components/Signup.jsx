import React, { useState } from 'react';
import './Signup.css';
import axios from "axios";

const Signup = () => {
  const [userType, setUserType] = useState('worker'); 
  const [username,setUsername] = useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(username);
    console.log(email);
    console.log(password);

    const url  = (userType === "worker") ? "http://localhost:8000/signup_worker" : "http://localhost:8000/signup_user";

    const data = {username,email, password};
    axios.post(url,data)
    .then((res)=>{
      console.log(res.data);
    })
   
  };

  return (
      <div className='signup-cont'>
             <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userType">Select User Type:</label>
        <select id="userType" value={userType} onChange={handleUserTypeChange}>
          <option value="worker">Worker</option>
          <option value="client">Client</option>
          
        </select>

        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required value={username}
          onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required 
          value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type="submit" >Sign Up</button>
      </form>
    </div>
      </div>
  
  );
};

export default Signup;
