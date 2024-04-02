import React, { useState } from "react";
import "./VerifyOtp.css";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const handleResendCode = () => {
    // Handle the logic for resending the code here
    console.log("Resend Code");
  };

  const verify = (e) => {};

  return (
    <div className="whole">
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
          {/* Resend Code link */}
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
