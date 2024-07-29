import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const navigate = useNavigate();
  const appointmentDetails = {}; // Получить детали бронирования из состояния или контекста

  const handleConfirm = () => {
    // Логика для подтверждения бронирования
  };

  const handleReject = () => {
    navigate('/booking');
  };

  return (
    <div>
      <h1>Bestätigung</h1>
      <p>Arzt: {appointmentDetails.doctorName}</p>
      <p>Datum und Zeit: {appointmentDetails.date} {appointmentDetails.time}</p>
      <button onClick={handleConfirm}>Bestätigen</button>
      <button onClick={handleReject}>Ablehnen</button>
    </div>
  );
}

export default Confirmation;
