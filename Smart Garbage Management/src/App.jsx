import { useState } from 'react';
import Signup from './Components/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login.jsx';
import Landing from './landing_Page/landing.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the `element` prop instead of `component` */}
        <Route path = "/" element = {Landing}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
