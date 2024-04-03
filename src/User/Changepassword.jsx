import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './changepassword.css'
import axios from 'axios';

const Changepassword = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [type, setType] = useState(0);
  const [show, setShow] = useState(0);
  const [otp, setOtp] = useState("");
  const [valid , isValid] = useState(false);

  const navigate = useNavigate();

  const handleSendOTP = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('https://skillsyncbackend.onrender.com/auth/sendOtp' , {
        email
      })
      console.log(response.data);
    }
    catch(e){
      console.log(e.response.data);
    }
    setShow(1);
  };

  const handleVerifyOTP = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('https://skillsyncbackend.onrender.com/auth/validateOtp' ,{
        email ,
        otp
      });
      isValid(true);
    }catch(e){
      console.log(e);
    }
    setType(1);
  };

  const updateOtp = async(e) => {
    e.preventDefault();
    if(isValid){
      const response = await axios.post('https://skillsyncbackend.onrender.com/auth/changePassword' ,{
        email ,
        password
      })
      console.log(response.data);
      navigate('/login');
    }
  };

  return (
    <div className="whole">
      <div className="center">
        <h2>Account Recovery</h2>
        {type === 0 ? (
          <form onSubmit={handleSendOTP}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {show === 0 ? (
              <div className="button">
                <button onClick={handleSendOTP}>Send OTP</button>
              </div>
            ) : (
              <div className="form-group">
                <label htmlFor="otp">OTP:</label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <div className="button">
                  <button onClick={handleVerifyOTP}>Verify</button>
                </div>
              </div>
            )}
          </form>
        ) : (
          <form onSubmit={updateOtp}>
            <div className="form-group">
              <label htmlFor="password">New Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password:</label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                required
              />
            </div>
            {password !== cpassword && cpassword !== "" && (
              <div>Passwords do not match</div>
            )}
            {password === cpassword ? (
              <div className="button">
                <button type="submit">Change</button>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  style={{
                    cursor: "not-allowed",
                    backgroundColor: "gray",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                  }}
                  disabled
                >
                  Change
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Changepassword;