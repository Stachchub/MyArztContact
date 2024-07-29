import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; 2024 Praxis. Alle Rechte vorbehalten.</p>
      </div>
      <div className='footer-links'>
        <a href="/datenschutz"> Datenschutz</a>
        <a href="/impressum">Impressum</a>
        <a href="/kontakt">Kontakt</a>
      </div>
    </footer>
  );
}

export default Footer;
