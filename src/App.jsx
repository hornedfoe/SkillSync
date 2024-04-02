import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';
import Otp from './User/VerifyOtp.jsx';
import Home from './root/home.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifyotp" element={<Otp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
