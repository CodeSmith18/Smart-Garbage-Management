import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/logsig/Login.jsx';
import Landing from './landing_Page/landing.jsx';
import Signup from './Components/logsig/Signup.jsx';
import AdminDashboard from './Dashboard/Dashboard.jsx';
import UserPageD from './UserPage/UserPage.jsx';
import Profile from './ProfilePage/Profile.jsx';
import ComplainForm from './ComplainForm/ComplainForm.jsx';
import AssignedWork from './AssignedWork/AssignedWork.jsx';
import UserHome from './UserHome/UserHome.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the `element` prop instead of `component` */}
        <Route path = "/" element = {<Landing></Landing>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element = {<Login/>}/>
        <Route path="/dashboard" element = {<AdminDashboard/>}/>
        <Route path="/userpage" element = {<UserPageD/>}/>
        <Route path="/profilepage" element = {<Profile/>}/>
        <Route path="/complain" element = {<ComplainForm/>}/>
        <Route path="/assignedwork" element = {<AssignedWork/>}/>
        <Route path="/userhome" element = {<UserHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;