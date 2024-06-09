// import Calendar from "../../Components/Calendar/Calendar.jsx";
// import { getConecshen,getStudentData ,getConnectionSchedule} from "./Scheduler.helper.jsx";;
// // import { getLecData } from "./Scheduler.helper.jsx";
// import { useEffect, useState } from "react";
// import HeaderComp from '../../Components/Header/HeaderComp.jsx'
// import "./Scheduler.css";
// import PopupComponent from "../../Components/Calendar/BotomCalendar.jsx";

// // בקשת גט לקבל קולקשןקנקשן שם מלא של מרצה ושם מקצוע 
// // לשלוח בקשת גט עם איידיי של סטודנט שמקבלים מהטוקן הבקשה לconnectionStudLecModel.js
// // הכתובת app.use('/api/connectionStudLec', connectionStudLecRouter
// // function lecturers() {
// //   const [currentConection, setCurrentConection] = useState({});

// //   const fetchLecConecshen = async () => {
// //     const dataconecshen = await getConecshen()
// //     setCurrentConection(dataconecshen)
// //   }
// //   useEffect(() => {
// //     fetchLecConecshen()
// //   }, [])

// //   const handleConnectionClick = (connection) => {
// //     setCurrentConection(connection);
// //   };





// function Schedulerr({ tokenID }) {
//   const [currentScheduleStu, setCurrentScheduleStu] = useState({});
//   const [displayedSchedule, setDisplayedSchedule] = useState({});
//   const [isLecture, setIsLecture] = useState(false);
//   // const [currentConectionSchedule, setCurrentConectionSchedule] = useState({});
//   const [connections, setConnections] = useState([]);
//   const [connections2, setConnections2] = useState([]);
//   //const [lecturers, setLecturers] = useState([])

//   const fetchStudentData = async () => {
//     const data = await getStudentData()
//     setCurrentScheduleStu(data)
//     setDisplayedSchedule(data)
//   }
//   // const fetchLecData = async () => {
//   //   const Data = await getLecData()
//   //   setCurrentConectionSchedule(Data)
//   // }

//   const fetchConnections = async () => {
//     const data = await getConecshen()
//     if (data.status === 'success') {
//       setConnections(data.connectionStudLec);
//       setConnections2(data)
//     }
//     //setLecturers(data.lecturers)
//   }

//   const fetchAll = async () => {
//     await fetchStudentData()
//     await fetchConnections()
//     // await fetchLecData()

//   }

//   useEffect(() => {
//     fetchAll();
//   }, [])

//   const handleConnectionsClick = async (conection) => {
//     const data = await getConnectionSchedule(conection._id)
//     setDisplayedSchedule(data);
//     setIsLecture(true)
//   };
//   const handleMyScheduleClick = () => {
//     setDisplayedSchedule(currentScheduleStu);
//     setIsLecture(false)

//   };
  
//   return (
    
//     <div className="App">
//       <HeaderComp />
      
//       <div className="main-content">
        
//         <Calendar isLecture={isLecture} schedule={displayedSchedule} />

//         <div className="lecturers-list">
//         <PopupComponent />
         
//           <h2>My Conections</h2>
//           <h3 key={tokenID} className="button-like" onClick={() => handleMyScheduleClick()}>my schedule</h3>
//           {/* <ul>
//               {connections?.map(connection => (
//               <li
//                 key={connection._id}
//                 onClick={() => handleCcnnectionsClick(connection._id)}
//               >
//                 {connection.lecID.lecFName} {connection.lecID.lecLName} :{connection.connLang}
//               </li>
//             ))}
//           </ul> */}
          
//           {connections && (
//             <ul>
//               {connections.map((connection ,index) => (
//                 <li key={index} onClick={() => handleConnectionsClick(connection)}
//                 >
//                   {connection?.lecID?.lecFName} {connection?.lecID?.lecLName} :{connection?.connLang}</li>
//               ))}
              
//             </ul>
//           )}
          
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Schedulerr;

// import Calendar from "../../Components/Calendar/Calendar.jsx";
// import PopupComponent from "../../Components/Calendar/BotomCalendar.jsx";
// import { getConecshen, getStudentData, getConnectionSchedule } from "./Scheduler.helper.jsx";
// import { useEffect, useState } from "react";
// import HeaderComp from '../../Components/Header/HeaderComp.jsx';
// import "./Scheduler.css";
// // פונקציה שמקבלת קומפוננטות ומציגה על הדף 
// function Schedulerr( {tokenID} ) {
//   const [currentScheduleStu, setCurrentScheduleStu] = useState({});
//   const [displayedSchedule, setDisplayedSchedule] = useState({});
//   const [isLecture, setIsLecture] = useState(false);
//   const [connections, setConnections] = useState(null);
//   const [connections2, setConnections2] = useState([]);
//   const [loadingMySchedule, setLoadingMySchedule] = useState(false);
//   const [loadingConnection, setLoadingConnection] = useState(false);
//   const [ConnectionSchedule, setConnectionSchedule] = useState({})
  
//   const fetchConnectionSchedule = async () => {
//     const data = await getConnectionSchedule()
//     setConnectionSchedule(data)
//   }

//   // וודא שהמערך מוגדר ואינו ריק
//   if(connections && connections?.connectionStudLec) {
//   //     // הצג את האיבר הראשון במערך
//       console.log(connections?.connectionStudLec[0]);
//   // } else {
//   //     console.log("connections.connectionStudLec is either not an array or it's empty");
//     }  
//   const fetchStudentData = async () => {
//     const data = await getStudentData();
//     setCurrentScheduleStu(data);
//     setDisplayedSchedule(data);
//   }

//   const fetchConnections = async () => {
//     const data = await getConecshen();
//     if (data.status === 'success') {
//       setConnections(data);
//       setConnections2(data);
//       console.log(data);
//     }
//   }
  

//   const fetchAll = async () => {
//     await fetchStudentData();
//     await fetchConnections();
//     await fetchConnectionSchedule();
//   }

//   useEffect(() => {
//     fetchAll();
//   }, [])

//   if(ConnectionSchedule )
// {  console.log(ConnectionSchedule);
// }  
//   // const connectionid = connections.connectionStudLec._id
//   const handleConnectionsClick = async (connection) => {
//     setLoadingConnection(true);
//     const data = await getConnectionSchedule(connection._id);
//     setDisplayedSchedule(data);
//     setIsLecture(true);
//     setLoadingConnection(false);
//     console.log(data._id);

//   };


//   const handleMyScheduleClick = () => {
//     setLoadingMySchedule(true);
//     setDisplayedSchedule(currentScheduleStu);
//     setIsLecture(false);
//     setLoadingMySchedule(false);
//   };
//   // console.log(connections?.connectionStudLec[0]);

  
//   console.log(connections);
//   return (
//     <div className="App">
//       <HeaderComp />
//       <div className="main-content">
//         {loadingMySchedule || loadingConnection ? (
//           <div className="spinner"></div>
//         ) : (
//           <>
//           {/* coonectionID={connectionid} */}
//             <Calendar isLecture={isLecture} schedule={displayedSchedule} connectionForId={connections} />
//             <div className="lecturers-list">
//               <PopupComponent />
//               <h2>My Conections</h2>
//               <h3 key={tokenID} className="button-like" onClick={() => handleMyScheduleClick()}>my schedule</h3>
//               {connections && connections.connectionStudLec && (
//                 <ul>
//                     {connections?.connectionStudLec?.map((connection, index) => (
//                     <li key={index} onClick={() => handleConnectionsClick(connection)}>
//                       {connection?.lecID?.lecFName} {connection?.lecID?.lecLName} :{connection?.connLang}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Schedulerr;

import Calendar from "../../Components/Calendar/Calendar.jsx";
import PopupComponent from "../../Components/Calendar/BotomCalendar.jsx";
import { getConecshen, getStudentData, getConnectionSchedule } from "./Scheduler.helper.jsx";
import { useEffect, useState } from "react";
import HeaderComp from '../../Components/Header/HeaderComp.jsx';
import "./Scheduler.css";

// פונקציה שמקבלת קומפוננטות ומציגה על הדף
function Schedulerr( {tokenID} ) {
  // שימוש ב-useState לאחסון נתונים מקומיים של הקומפוננטה
  const [currentScheduleStu, setCurrentScheduleStu] = useState({});
  const [displayedSchedule, setDisplayedSchedule] = useState({});
  const [isLecture, setIsLecture] = useState(false);
  const [connections, setConnections] = useState(null);
  const [connections2, setConnections2] = useState([]);
  const [loadingMySchedule, setLoadingMySchedule] = useState(false);
  const [loadingConnection, setLoadingConnection] = useState(false);
  const [ConnectionSchedule, setConnectionSchedule] = useState({})

  const [connectionId, setConnectionId] = useState(null)
  console.log(currentScheduleStu);
  // פונקציה לאחזור לוח זמנים של קשרים מהשרת
  // const fetchConnectionSchedule = async () => {
  //   const data = await getConnectionSchedule()
  //   setConnectionSchedule(data)
  // }

  // אם connections מוגדר ויש לו את המערך connectionStudLec, מציג את האיבר הראשון במערך
  if(connections && connections?.connectionStudLec) {
      console.log(connections?.connectionStudLec[0]._id);
    }  

  // פונקציה לאחזור נתוני התלמיד מהשרת
  const fetchStudentData = async () => {
    const data = await getStudentData();
    setCurrentScheduleStu(data);
    setDisplayedSchedule(data);
  }
  
  // פונקציה לאחזור קשרים מהשרת
  const fetchConnections = async () => {
    const data = await getConecshen();
    if (data?.status === 'success') {
      setConnections(data);
      setConnections2(data);
      console.log(data);
    }
  }
  console.log(connections);
  getConnectionSchedule
  // פונקציה לאחזור כל הנתונים הדרושים לקריאה הראשונה
  const fetchAll = async () => {
    await fetchStudentData();
    await fetchConnections();
    // await fetchConnectionSchedule();
  }

  // שימוש ב-useEffect להרצת הפונקציה fetchAll בקריאה הראשונה של הקומפוננטה
  useEffect(() => {
    fetchAll();
  }, [])

  // אם ConnectionSchedule מוגדר, מציג את הנתונים שלו
  if(ConnectionSchedule ) {
    console.log(ConnectionSchedule);
  }  
  
  // פונקציה לטיפול בלחיצה על קשר מסוים, מציגה את לוח הזמנים של הקשר הנבחר
  const handleConnectionsClick = async (connection) => {
    setLoadingConnection(true);
    const data = await getConnectionSchedule(connection._id);
    console.log(connection._id);
    console.log(connection);
    setConnectionSchedule(data)
    console.log(data);
    setDisplayedSchedule(data);
    setIsLecture(true);
    setLoadingConnection(false);
    console.log(data._id);
    setConnectionId(connection._id)
  };

  // פונקציה לטיפול בלחיצה על לוח הזמנים שלי, מציגה את לוח הזמנים של התלמיד
  const handleMyScheduleClick = () => {
    setLoadingMySchedule(true);
    setDisplayedSchedule(currentScheduleStu);
    setIsLecture(false);
    setLoadingMySchedule(false);
  };

  // מדפיסה את האובייקט connections
  console.log(connections);
  console.log(currentScheduleStu);

  return (
    <div className="App">
      <HeaderComp />
      <div className="main-content">
        {loadingMySchedule || loadingConnection ? (
          <div className="spinner"></div>
        ) : (
          <>
            <Calendar isLecture={isLecture} schedule={displayedSchedule} connectionForId={connectionId} />
            <div className="lecturers-list">
              <PopupComponent />
              <h2>My Conections</h2>
              <h3 key={tokenID} className="button-like" onClick={() => handleMyScheduleClick()}>my schedule</h3>
              {connections && connections.connectionStudLec && (
                <ul>
                    {connections?.connectionStudLec?.map((connection, index) => (
                    <li key={index} onClick={() => handleConnectionsClick(connection)}>
                      {connection?.lecID?.lecFName} {connection?.lecID?.lecLName} :{connection?.connLang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Schedulerr;


