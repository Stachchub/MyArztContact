import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DoctorInfo() {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/doctors/${doctorId}`)
      .then(response => response.json())
      .then(data => {
        setDoctor(data);
      });
  }, [doctorId]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div>
      <h1>Informationen über den Arzt</h1>
      <img src={doctor.photoUrl} alt={`${doctor.vorname} ${doctor.name}`} />
      <p>Vorname: {doctor.vorname}</p>
      <p>Name: {doctor.name}</p>
      <p>Abteilung: {doctor.abteilung}</p>
      <p>Ausbildung: {doctor.ausbildung}</p>
      <p>Berufserfahrung: {doctor.berufserfahrung}</p>
      <p>Sprachkenntnisse: {doctor.sprachkenntnisse}</p>
      <p>Bewertungen: {doctor.bewertungen}</p>
    </div>
  );
}

export default DoctorInfo;
