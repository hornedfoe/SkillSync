import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : {};
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('https://skillsyncbackend.onrender.com/auth/login' , {
          email,
          password
      });
      setUserData(response.data);
      localStorage.setItem('userData', JSON.stringify(response.data));
      Navigate('/home');
    }catch(e){
      console.log(e.response.data);
    }
  };

  return (
    <div className="whole-login">
      <div className="center-login">
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
          <div className="button-login">
            <button type="submit">Login</button>
            <a href="/changepassword" style={{ color: "rgb(8, 148, 218)" }}>
              Forget Password?
            </a>
          </div>
          <p style={{ color: "red" }}>Need an account?</p>
          <a href="/register" style={{ color: "rgb(8, 148, 218)" }}>
            Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
