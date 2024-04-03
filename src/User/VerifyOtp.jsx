import React, { useContext, useState } from "react";
import "./VerifyOtp.css";
import axios from 'axios';
import { Context } from "../App";
const Otp = () => {
  const [otp, setOtp] = useState("");
  
  const {name, email , password , username} = useContext(Context);
  const handleResendCode = () => {
    console.log("Resend Code");
  };

  const verify = async() => {
    console.log(email);
  
    const role = 'mentee';
    const specialization = null;
    const past = null;
    try{
      const response  = await axios.post('https://skillsyncbackend.onrender.com/auth/validateOtp' , 
      {
          email,
          otp
      });
      console.log(response.data);
      if(response.status == 200){
        const user = await axios.post('https://skillsyncbackend.onrender.com/auth/register' , {
          name, 
          email ,
          username,
          password,
          role ,
          specialization ,
          past
        });
        console.log(user.data);
      }
    }catch(e){
      console.log(e.response);
    }
  };

  return (
    <div className="whole">
      {console.log(email)}
      <div className="center">
        <h2>Account Verification</h2>
        <form onSubmit={verify}>
          <div className="form-group">
            <label htmlFor="name">Enter OTP Code:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Verify</button>
          </div>
          <p
            onClick={handleResendCode}
            style={{
              color: "rgb(8, 148, 218)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend Code?
          </p>
        </form>
      </div>
    </div>
  );
};
export default Otp;