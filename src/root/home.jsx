import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  }

  const handleRegisterClick = () => {
    navigate('/register');
  }

  return (
    <div className='cont'>
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  );
}

export default Home;
