import React, { useContext } from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { Context } from "../App";

const Register = () => {

  const {name, email , password , username} = useContext(Context);
  const {setName, setEmail , setPassword , setUsername} = useContext(Context);
  const navigate = useNavigate();
  const handleRegister = async(e) => {
    e.preventDefault();
    console.log("Registration:", name, email, password, username);
    try{
      const available = await axios.post('https://skillsyncbackend.onrender.com/auth/isAvailable',{
        email ,
        username
      });
      console.log(available.data);
      if(available.status == 200){
        const send = await axios.post('https://skillsyncbackend.onrender.com/auth/sendOtp' , {
          email
        });
        console.log(send.data);
        navigate('/verifyOtp');
      }else{
        throw new Exception(available.status);
      }
    }
    catch(e){
      console.log(e.response.data);
    }
  };

  return (
    <div className="whole">
      <div className="center">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
          <p style={{ color: "red" }}>Already have an account?</p>
          <a href="/login" style={{ color: "rgb(8, 148, 218)" }}>
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
