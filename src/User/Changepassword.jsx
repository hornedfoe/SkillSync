import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Changepassword.css'

const Changepassword = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [type, setType] = useState(0);
  const [show, setShow] = useState(0);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    setShow(1);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setType(1);
  };

  const updateOtp = (e) => {
    e.preventDefault();
    navigate('/login');
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