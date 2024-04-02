import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';
import OTPPage from './User/OTPPage.jsx';
import Home from './root/home.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTPPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
