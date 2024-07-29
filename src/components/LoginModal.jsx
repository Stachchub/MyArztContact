import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginModal.css';

function LoginModal({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика для авторизации пользователя
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>
          Neu bei uns? <Link to="/signup">Jetzt registrieren</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
