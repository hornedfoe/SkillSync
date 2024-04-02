import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("Login:", email, password);
  };

  const handleclick = () => {
    navigate("/register");
  };
    try{
      const response = await axios.post('https://skillsyncbackend.onrender.com/auth/login' ,
      {
        username,
        password
      });
      console.log("Login successful :" , response.data);
    }catch(e){
      console.log(e.response.data);
    }
    console.log('Login:', username, password);
  }
 
  const handleclick = () =>{
      navigate('/register');
  }
  return (
    <div className="whole">
      <div className="center">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button">
            <button type="submit">Login</button>
          </div>

          <p style={{ color: "red" }}>Need an account?</p>
          <a href="/register" style={{ color: "rgb(8, 148, 218)" }}>
            Sign up
          </a>
        </form>
      </div>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">UserName:</label>
          <input type="text" id="email" value={username} onChange={(e) => setusername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <button onClick={handleclick}>
          Don't have an account ! sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
