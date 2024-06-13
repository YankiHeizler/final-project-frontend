const LecturerePage = () => {
  return (
    <div>LecturerePageeee
       <button  >calendar</button>
    </div>
   

  )
}


import React, { useState, useEffect, } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import HeaderComp from '../../Components/Header/HeaderComp';
import './LecturerePage.css'
import { useNavigate } from "react-router-dom";
 import { createConnectionSchedule } from "../Scheduler/Scheduler.helper";

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
        console.log(lecturerId)
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

  let navigate = useNavigate(); 

  const routeChange = (path) =>{ 
    navigate(path);
  };
 
  const navigateToPersonalArea = async () => {
    const currentLang = localStorage.getItem('lang');

    const dataToServer = {
      "userDetails":{
          "lecID": lecturerId,
          "connLang": currentLang,
          "connLessons": [],
          "connBooks": [""]
      }
    };
    let res = {};
  try{
      res = await axios.post('http://localhost:3008/api/connectionStudLec',dataToServer        
      ,{withCredentials:true});
      routeChange('/studentarea');
    }
    catch(error){
      if(error.code == "ERR_BAD_REQUEST")
        {
          localStorage.setItem('isNavigateToCreateLectorConnection', 'true');
          localStorage.setItem('lecturerId', lecturerId);
          routeChange('/login');
        }
        console.log(error);
    }

  };
    return (
      <>
      <HeaderComp />
      
      <div className="lecturer-card" >
        
        <div className="lecturer-details">
        <img src="{product.lecFoto}" alt="photo" />
          <h3>{lecturer.lecFName}</h3>
          <h3>{lecturer.lecLName}</h3>
          <h3>{lecturer.lecSex}</h3>
          <h3>השכלה: {lecturer.lecEduc}</h3>
          <h3>שפת אם: {lecturer.lecMotherLang}</h3>
          <h3>תעריף: {lecturer.lecRate} ש"ח</h3>
          

          <button><Link className='link' onClick={() =>{ navigateToPersonalArea() }}>ליצירת קשר עם מרצה</Link></button>


        </div>
      </div>


      </>
    );
  };


export default LecturerDetailsPage;


