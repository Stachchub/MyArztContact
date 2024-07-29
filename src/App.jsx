import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Booking from './components/Booking';
import DoctorInfo from './components/DoctorInfo';
import Confirmation from './components/Confirmation';
import AdminSchedule from './components/AdminSchedule';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import Kontakt from './components/Kontakt';
import './global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Booking />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/doctors/:doctorId" element={<DoctorInfo />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/admin/schedule" element={<AdminSchedule />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
