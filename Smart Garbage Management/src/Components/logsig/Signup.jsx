import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import styles from './login.module.css';

const Signup = () => {
  const [userType, setUserType] = useState('worker');
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const url = userType === 'worker' ? "http://localhost:8000/signup_worker" : "http://localhost:8000/signup_user";
    const data = { username, email, password };

    if (!username || !email || !password) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      return;
    }

    axios.post(url, data)
      .then((response) => {
        setLoading(false);
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate('/login');
        }, 1000); // Adjust delay as needed (in milliseconds)
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Signup failed. Please try again.");
        console.error("Signup error:", error.message, error);
      });
  };

  return (
    <div className={styles.signupCont}>
      <div className={styles.signupForm}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userType">Select User Type:</label>
          <select id="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="worker">Worker</option>
            <option value="client">Client</option>
          </select>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
