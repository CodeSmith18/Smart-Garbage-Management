import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [userType, setUserType] = useState('worker'); 

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Form submitted for user type:', userType);
   
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
          <input type="text" id="username" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
      </div>
  
  );
};

export default Signup;
