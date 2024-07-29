import React, { useState, useEffect } from 'react';
import LoginModal from './LoginModal'; // Импортируем компонент модального окна
import '../styles/Booking.css'

function Booking() {
  const [existingPatient, setExistingPatient] = useState(null);
  const [insurance, setInsurance] = useState('');
  const [category, setCategory] = useState('');
  const [doctor, setDoctor] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/doctors')
      .then(response => response.json())
      .then(data => {
        setDoctor(data[0]?.id); // установим первого доктора по умолчанию, если данные существуют
      });
  }, []);

  const handleExistingPatient = (isExisting) => {
    setExistingPatient(isExisting);
  };

  const fetchAvailableSlots = () => {
    fetch(`http://localhost:3001/available-slots?doctorId=${doctor}&insurance=${insurance}`)
      .then(response => response.json())
      .then(data => {
        setAvailableSlots(data);
      });
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setShowLoginModal(true); // Показываем модальное окно при нажатии на "Bestätigen"
  };

  return (
    <div>
      <h1>Termin buchen</h1>
      <form onSubmit={handleBooking}>
        <div>
          Waren Sie schon einmal bei uns?
          <button type="button" onClick={() => handleExistingPatient(true)}>Ja</button>
          <button type="button" onClick={() => handleExistingPatient(false)}>Nein</button>
        </div>
        {existingPatient === false && <p>Entschuldigung, wir nehmen keine neuen Patienten mehr auf.</p>}
        {(existingPatient || existingPatient === null) && (
          <>
            <label>
              Wählen Sie Ihre Versicherung:
              <select value={insurance} onChange={(e) => setInsurance(e.target.value)}>
                <option value="Gesetzlich versichert">Gesetzlich versichert</option>
                <option value="Privat versichert">Privat versichert</option>
              </select>
            </label>
            <label>
              Wählen Sie bitte einen Arzt:
              <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                {/* Подставьте список врачей */}
              </select>
            </label>
            <button type="button" onClick={fetchAvailableSlots}>Verfügbare Termine anzeigen</button>
            <div>
              {availableSlots.map((slot, index) => (
                <button key={index} type="button" className="slot-button" onClick={() => handleSlotSelection(slot)}>
                  {slot.date} {slot.dayOfWeek} {slot.time}
                </button>
              ))}
            </div>
            <button type="submit">Bestätigen</button>
          </>
        )}
      </form>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
}

export default Booking;
