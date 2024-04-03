import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';
import Otp from './User/VerifyOtp.jsx';
import Home from './root/home.jsx';
<<<<<<< HEAD
import {useState, createContext} from 'react';
export const Context = createContext()
=======
import Changepassword from './User/Changepassword.jsx';

>>>>>>> a1f34ebea0fdda7578a006c8239f72c045380885
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> a1f34ebea0fdda7578a006c8239f72c045380885
  );
}

export default App;
