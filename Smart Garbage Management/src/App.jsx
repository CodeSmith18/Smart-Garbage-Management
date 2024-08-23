import { useState } from 'react';
import Signup from './Components/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/logsig/Login.jsx';
import Landing from './landing_Page/landing.jsx';
import Signup from './Components/logsig/Signup.jsx';
import AdminDashboard from './Dashboard/Dashboard.jsx';
import UserPageD from './UserPage/UserPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the `element` prop instead of `component` */}
        <Route path = "/" element = {<Landing></Landing>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
