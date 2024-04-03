import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('https://skillsyncbackend.onrender.com/auth/login' , {
          email,
          password
      });
      console.log(response.data);
    }catch(e){
      console.log(e.response.data);
    }
    console.log("Login:", email, password);
  };

  return (
    <div className="whole">
      <div className="center">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
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
            Register
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
