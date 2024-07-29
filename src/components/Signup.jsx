import React, { useState } from 'react';
import '../styles/Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    anrede: '',
    vorname: '',
    nachname: '',
    geburtsdatum: '',
    telefonnummer: '',
    email: '',
    password: '',
    passwordWiederholen: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('User registered:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h1>Registrierung</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Anrede:
          <select name="anrede" value={formData.anrede} onChange={handleChange}>
            <option value="Frau">Frau</option>
            <option value="Mann">Mann</option>
          </select>
        </label>
        <label>
          Vorname:
          <input type="text" name="vorname" value={formData.vorname} onChange={handleChange} />
        </label>
        <label>
          Nachname:
          <input type="text" name="nachname" value={formData.nachname} onChange={handleChange} />
        </label>
        <label>
          Geburtsdatum:
          <input type="date" name="geburtsdatum" value={formData.geburtsdatum} onChange={handleChange} />
        </label>
        <label>
          Telefonnummer:
          <input type="text" name="telefonnummer" value={formData.telefonnummer} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Password wiederholen:
          <input type="password" name="passwordWiederholen" value={formData.passwordWiederholen} onChange={handleChange} />
        </label>
        <button type="submit">Jetzt registrieren</button>
      </form>
    </div>
  );
}

export default Signup;
