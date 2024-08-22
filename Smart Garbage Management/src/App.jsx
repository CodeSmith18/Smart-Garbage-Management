import { useState } from 'react';
import Signup from './Components/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the `element` prop instead of `component` */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
