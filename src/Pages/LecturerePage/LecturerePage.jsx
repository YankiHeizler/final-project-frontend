

import React, { useState, useEffect, Link } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderComp from '../../Components/Header/HeaderComp';
import './LecturerePage.css'

const LecturerDetailsPage = () => {
  const { lecturerId } = useParams();
  const [lecturer, setLecturer] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLecturer = async () => {
      try {
        const response = await axios.get(`http://localhost:3008/api/lectors?_id=${lecturerId}`);
        setLecturer(response.data.lectors[0]);

        console.log(response.data.lectors[0]);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchLecturer();
  }, [lecturerId]);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }


  if (!lecturer) {
    return <div>Loading...</div>;
  }

  // const LecturerCard = ({ product }) => {
    return (
      <>
      <HeaderComp />
      
      <div className="lecturer-card" >
        
        <div className="lecturer-details">
          <h3>{lecturer.lecFName}</h3>
          <h3>{lecturer.lecLName}</h3>
          <h3>{lecturer._id}</h3>
          <h3>השכלה: {lecturer.lecEduc}</h3>
          <h3>שפת אם: {lecturer.lecMotherLang}</h3>

          <img src="{product.lecFoto}" alt="photo" />
          {/* <Link to={'/login'} className='link'>להתחברות/הרשמה</Link> */}


        </div>
      </div>
      {/* <button><Link to={'/login'} className='link'>להתחברות/הרשמה</Link></button> */}

      </>
    );
  };
  
//   return (
//     <div>
//       <HeaderComp />
//       {/* <h1>{lecturer.lecFName}</h1>
//       <p>{lecturer.lecLName}</p>
//       <p>Specialty: {lecturer.lecEduc}</p> */}
//        <LecturerCard  product={lecturer} /> 

//     </div>
//   );
// };

export default LecturerDetailsPage;


