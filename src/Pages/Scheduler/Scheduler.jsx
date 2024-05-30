import Calendar from "../../Components/Calendar/Calendar.jsx";
// import { /*studentScheduleActive,*/ lecturerSchedule } from "./Scheduler.helper.js";
import { getStudentData } from "./Scheduler.helper.jsx";
import { useEffect, useState } from "react";
import HeaderComp from '../../Components/Header/HeaderComp.jsx'
import "./Scheduler.css";

// בקשת גט לקבל קולקשןקנקשן שם מלא של מרצה ושם מקצוע 
// לשלוח בקשת גט עם איידיי של סטודנט שמקבלים מהטוקן הבקשה לconnectionStudLecModel.js
// הכתובת app.use('/api/connectionStudLec', connectionStudLecRouter
const lecturers = []
//   { id: 0, name: 'your schedule', schedule: getStudentData() },
//   { id: 1, name: "Lecturer 1", schedule: lecturerSchedule },
//   { id: 2, name: "Lecturer 2", schedule: lecturerSchedule },
//   // Add more lecturers if needed 
// ];

function Schedulerr() {
  const [currentSchedule, setCurrentSchedule] = useState({});

  const fetchStudentData = async () => {
   const data = await getStudentData()
   console.log(data);
   setCurrentSchedule(data)
    // setCurrentSchedule()
  }

  useEffect(() => {
    fetchStudentData()
  }, [])

  const handleLecturerClick = (schedule) => {
    setCurrentSchedule(schedule);
  };
  return (

    <div className="App">
      <HeaderComp />
      <div className="main-content">
        <Calendar schedule={currentSchedule} />
        <div className="lecturers-list">

          <h2>Lecturers</h2>
          <ul>
            {lecturers?.map((lecturer) => (
              <li
                key={lecturer.id}
                onClick={() => handleLecturerClick(lecturer.schedule)}
              >
                {lecturer.name}
               </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );  
 }

export default Schedulerr;
