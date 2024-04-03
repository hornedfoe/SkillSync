import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './changepassword.css'

const Changepassword = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();
  const updateOtp = async (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <div className="whole">
      <div className="center">
        <h2>Account Recovery</h2>
        <form onSubmit={updateOtp}>
          <div className="form-group">
            <label htmlFor="">New Password:</label>
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
            <label htmlFor="">Confirm Password:</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
          </div>
        
          {password != cpassword && cpassword !=""  && <div>Password does not match</div>}
          {password == cpassword ? <div className="button">
            <button type="submit">Change</button>
          </div>:<div>
    <button 
        type="submit" 
        style={{ 
            cursor: 'not-allowed', 
            backgroundColor: 'gray',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px'
        }}
    >
        Change
    </button>
</div>}
          
        </form>
      </div>
    </div>
  );
};

export default Changepassword;
