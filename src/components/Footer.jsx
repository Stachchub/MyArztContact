import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; 2024 Praxis. Alle Rechte vorbehalten.</p>
      </div>
      <div>
        <a href="/privacy-policy"> Datenschutz</a>
        <a href="/terms-of-service">Impressum</a>
        <a href="/contact">Kontakt</a>
      </div>
    </footer>
  );
}

export default Footer;
