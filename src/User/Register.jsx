import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [role, setRole] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [pastExperiences, setPastExperiences] = useState('');
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://skillsyncbackend.onrender.com/auth/register', {
        name,
        email,
        password,
        username,
        phoneNumber,
        role,
        specialization,
        pastExperiences
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  }

  const handleVerifyEmail = () => {
    console.log('Verifying email:', email);
    navigate("/otp");
  }

  const handleclick = () =>{
    navigate("/login")
  }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="button" onClick={handleVerifyEmail}>Verify Email</button>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="number" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="specialization">Specialization:</label>
          <input type="text" id="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="pastExperiences">Past Experiences:</label>
          <textarea id="pastExperiences" value={pastExperiences} onChange={(e) => setPastExperiences(e.target.value)} required></textarea>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <button onClick={handleclick}>
          Already have an account! log in
        </button>
      </form>
    </div>
  );
}

export default Register;
