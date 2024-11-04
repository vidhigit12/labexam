import React from 'react';
import {BrowserRouter,Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useNavigate } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>




    <nav>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>













    </BrowserRouter>

    </>
  );
}



export default App;
