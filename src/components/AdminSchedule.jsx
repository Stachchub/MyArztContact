import React, { useState, useEffect } from 'react';

function AdminSchedule() {
  const [schedule, setSchedule] = useState({
    doctorId: '',
    insuranceType: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e) => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика для добавления или обновления расписания
  };

  return (
    <div>
      <h1>Zeitplan bearbeiten</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Arzt auswählen:
          <select name="doctorId" value={schedule.doctorId} onChange={handleChange}>
            {/* Список врачей */}
          </select>
        </label>
        <label>
          Versicherungsart auswählen:
          <select name="insuranceType" value={schedule.insuranceType} onChange={handleChange}>
            <option value="Gesetzlich versichert">Gesetzlich versichert</option>
            <option value="Privat versichert">Privat versichert</option>
          </select>
        </label>
        <label>
          Beginn der Zeit:
          <input type="datetime-local" name="startTime" value={schedule.startTime} onChange={handleChange} />
        </label>
        <label>
          Ende der Zeit:
          <input type="datetime-local" name="endTime" value={schedule.endTime} onChange={handleChange} />
        </label>
        <button type="submit">Zeitplan hinzufügen</button>
        <button type="submit">Zeitplan ändern</button>
      </form>
    </div>
  );
}

export default AdminSchedule;
