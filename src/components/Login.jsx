import React, { useState } from 'react';
import '../styles/Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных на сервер
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p className='textTitle'>Email:</p>
        <label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <p className='textTitle'>Password:</p>
        <label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
        <a href="/forgot-password">Passwort vergessen?</a>
      </form>
    </div>
  );
}

export default Login;
