import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css' 

function Header() {
  return (
    <header>
      <div>
        <img src="/logo_praxis.jpg" alt="Logo Praxis" />
      </div>
      <nav>
        <Link to="/signup">Registrierung</Link>
        <Link to="/login">Login</Link>
        <Link to="/booking">Termin buchen</Link>
      </nav>
    </header>
  );
}

export default Header;
