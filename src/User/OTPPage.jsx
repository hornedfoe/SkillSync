import React, { useState } from 'react';

const OTPPage = () => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.slice(0, 6); 
    setOTP(value);
  }

  return (
    <div>
      <h2>Enter OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={handleOTPChange}
        maxLength={6}
        style={{ width: '150px', padding: '6px' }}
      />
      <button>
        verify
      </button>
    </div>
  );
}

export default OTPPage;
