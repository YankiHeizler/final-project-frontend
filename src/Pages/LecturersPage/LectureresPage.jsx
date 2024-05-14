import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LecturersByLanguage = () => {
  const { language } = useParams(); 
  const [lecturers, setLecturers] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const response = await axios.get(`http://localhost:3008/api/lectors?lecLangs=${language}`);
        const fetchedLecturers = response.data.lectors || [];
        console.log({language})
        console.log(response.data.lectors);
        const filteredLecturers = fetchedLecturers.filter(lecturer =>
          lecturer.lecLangs && lecturer.lecLangs.includes(language)
        );

        setLecturers(filteredLecturers);
        console.log(lecturers)
        setError(null);
      } catch (err) {
        console.error('Error fetching lecturers:', err);
        setError(err.message);
      }
    };

    fetchLecturers();
  }, [language]); 

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <h1>מרצים שמלמדים {language}</h1>
      Display lecturers here
      {lecturers.map((lecturer) => (
        <p key={lecturer._id}>{lecturer.lecLName}</p>
      ))}
    </div>
  );
};

export default LecturersByLanguage;



