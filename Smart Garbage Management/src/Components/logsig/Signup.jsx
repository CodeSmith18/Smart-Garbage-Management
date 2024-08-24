import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Img from './landing.png';

const Signup = () => {
  const [userType, setUserType] = useState('worker');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const url = userType === 'worker' 
      ? 'http://localhost:8000/signup_worker' 
      : 'http://localhost:8000/signup_user';
    const data = { username, email, password };

    if (!username || !email || !password) {
      toast.error('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(url, data);
      setLoading(false);
      toast.success('Signup successful!');
      setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      setLoading(false);
      toast.error('Signup failed. Please try again.');
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: `url(${Img})` }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="userType" className="block text-gray-700 text-sm font-bold mb-2">Select User Type:</label>
              <select
                id="userType"
                value={userType}
                onChange={handleUserTypeChange}
                className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 w-full"
              >
                <option value="worker">Worker</option>
                <option value="client">Client</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 w-full"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`mt-8 bg-gray-700 text-white font-bold py-2 px-4 w-full rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'}`}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
