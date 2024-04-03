import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';
import Otp from './User/VerifyOtp.jsx';
import Home from './root/home.jsx';
import {useState, createContext} from 'react';
export const Context = createContext()
import Changepassword from './User/Changepassword.jsx';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <Context.Provider value={{ name , email , password , username , setName , setEmail , setPassword , setUsername}}>
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
    </Context.Provider>
  );
}

export default App;
