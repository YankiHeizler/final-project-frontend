import Calendar from "../../Components/Calendar/Calendar.jsx";
import { getConecshen } from "./Scheduler.helper.jsx";;

// import { /*studentScheduleActive,*/ lecturerSchedule } from "./Scheduler.helper.js";
import { getStudentData } from "./Scheduler.helper.jsx";
import { getLecData } from "./Scheduler.helper.jsx";
import { useEffect, useState } from "react";
import HeaderComp from '../../Components/Header/HeaderComp.jsx'
import "./Scheduler.css";

// בקשת גט לקבל קולקשןקנקשן שם מלא של מרצה ושם מקצוע 
// לשלוח בקשת גט עם איידיי של סטודנט שמקבלים מהטוקן הבקשה לconnectionStudLecModel.js
// הכתובת app.use('/api/connectionStudLec', connectionStudLecRouter
// function lecturers() {
//   const [currentConection, setCurrentConection] = useState({});

//   const fetchLecConecshen = async () => {
//     const dataconecshen = await getConecshen()
//     setCurrentConection(dataconecshen)
//   }
//   useEffect(() => {
//     fetchLecConecshen()
//   }, [])

//   const handleConnectionClick = (connection) => {
//     setCurrentConection(connection);
//   };


// }
// const lecturers = []
//   { id: 0, name: 'your schedule', schedule: getStudentData() },
//   { id: 1, name: "Lecturer 1", schedule: lecturerSchedule },
//   { id: 2, name: "Lecturer 2", schedule: lecturerSchedule },
//   // Add more lecturers if needed 
// ];

function Schedulerr() {
  const [currentSchedule, setCurrentSchedule] = useState({});
  const [currentConectionSchedule,setCurrentConectionSchedule] =useState({});
  const [lecturers, setLecturers] = useState([])

  const fetchStudentData = async () => {
    const dataa = await getStudentData()
    setCurrentSchedule(dataa)
  }
  const fetchLecData = async()=>{
    const Data = await  getLecData()
    setCurrentConectionSchedule(Data)
  }

  const fetchConnections = async () => {
    const data = await getConecshen()
    console.log(data);
    setLecturers(data.connectionStudLec)
  }

  useEffect(() => {
    fetchStudentData()
    fetchConnections()
    fetchLecData()
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
            {lecturers?.map(lecturer => (
              <li
                key={lecturer._id}
                onClick={() => handleLecturerClick(lecturer.schedule)}
              >
                {lecturer.lecID.lecFName}-{lecturer.lecID.lecLName} :{lecturer.connLang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedulerr;
