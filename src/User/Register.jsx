import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [pastExperiences, setPastExperiences] = useState("");

  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    console.log(
      "Registration:",
      name,
      email,
      password,
      username,
      phoneNumber,
      role,
      specialization,
      pastExperiences
    );
  };

  const handleVerifyEmail = () => {
    console.log("Verifying email:", email);
    navigate("/otp");
  };

  const handleLoginClick = () => {
    navigate("/login");
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
            <button type="button" onClick={handleVerifyEmail}>
              Verify Email
            </button>
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
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              id="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pastExperiences">Past Experiences:</label>
            <textarea
              id="pastExperiences"
              value={pastExperiences}
              onChange={(e) => setPastExperiences(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
        <button onClick={handleLoginClick}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Register;
