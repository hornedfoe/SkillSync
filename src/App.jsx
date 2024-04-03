import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';
import Otp from './User/VerifyOtp.jsx';
import Home from './root/home.jsx';
import Changepassword from './User/Changepassword.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifyotp" element={<Otp />} />
          <Route path="/Changepassword" element={<Changepassword/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
