import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Changepassword = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [type, setType] = useState(0);
  const [show, setShow] = useState(0);
  const [otp, setOtp] = useState("");
  const [valid, isValid] = useState(false);

  const navigate = useNavigate();

  const handleResendCode = async () => {
    setOtp("");
    try {
      const response = await axios.post(
        "https://skillsyncbackend.onrender.com/auth/sendOtp",
        {
          email,
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
    console.log("Resend Code");
  };
  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://skillsyncbackend.onrender.com/auth/sendOtp",
        {
          email,
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
    setShow(1);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://skillsyncbackend.onrender.com/auth/validateOtp",
        {
          email: email,
          otp: otp,
        }
      );
      isValid(true);
      setType(1);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const updateOtp = async (e) => {
    e.preventDefault();
    if (isValid) {
      try {
        const response = await axios.post(
          "https://skillsyncbackend.onrender.com/auth/changePassword",
          {
            email,
            password,
          }
        );
        console.log(response.data);
        navigate("/login");
      } catch (e) {
        console.log(e.response.data);
      }
    }
  };

  return (
    <div className="whole-login">
      <div className="center-login">
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
              <div className="button-login">
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
                <div className="button-login">
                  <button onClick={handleVerifyOTP}>Verify</button>
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
              <div className="button-login">
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
