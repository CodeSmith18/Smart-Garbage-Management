import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Login.jsx';
import Landing from './landing_Page/landing.jsx';
import Signup from './Components/Signup.jsx';

function App() {
  const [count, setCount] = useState(0)

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

export default App
