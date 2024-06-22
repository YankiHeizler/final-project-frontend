

import Calendar from "../../Components/Calendar/Calendar.jsx";
import PopupComponent from "../../Components/Calendar/BotomCalendar.jsx";
import { getConecshen, getStudentData, getConnectionSchedule } from "./Scheduler.helper.jsx";
import { useEffect, useState } from "react";
import HeaderComp from '../../Components/Header/HeaderComp.jsx';
import "./Scheduler.css";

function Schedulerr( {tokenID} ) {
  const [currentScheduleStu, setCurrentScheduleStu] = useState({});
  const [displayedSchedule, setDisplayedSchedule] = useState({});
  const [isLecture, setIsLecture] = useState(false);
  const [connections, setConnections] = useState(null);
  const [connections2, setConnections2] = useState([]);
  const [loadingMySchedule, setLoadingMySchedule] = useState(false);
  const [loadingConnection, setLoadingConnection] = useState(false);
  const [ConnectionSchedule, setConnectionSchedule] = useState({})
  const [date, setDate] = useState(new Date());

  


  // setLoadingMySchedule
  const [connectionId, setConnectionId] = useState(null)
  console.log(currentScheduleStu);
  if (connections && connections.connectionStudLec) {
    console.log(connections.connectionStudLec[0]?._id);
  }
  
  // פונקציה לאחזור לוח זמנים של קשרים מהשרת
  // const fetchConnectionSchedule = async () => {
  //   const data = await getConnectionSchedule()
  //   setConnectionSchedule(data)
  // }

  // אם connections מוגדר ויש לו את המערך connectionStudLec, מציג את האיבר הראשון במערך
  if(connections && connections?.connectionStudLec) {
      console.log(connections?.connectionStudLec[0]._id);
    }  
    console.log(date);

  // פונקציה לאחזור נתוני התלמיד מהשרת
  const fetchStudentData = async (date  = new Date()) => {
    const data = await getStudentData(date);
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
  const handleConnectionsClick = async (connection, date  = new Date()) => {
    setLoadingMySchedule(true);
    setLoadingConnection(true);
    const data = await getConnectionSchedule(connection._id, date);
    
    setConnectionSchedule(data)
    console.log(data);
    setDisplayedSchedule(data);
    setIsLecture(true);
    setLoadingConnection(false);
    console.log(data);
    setConnectionId(connection._id)
    setLoadingMySchedule(false);


  };

  // פונקציה לטיפול בלחיצה על לוח הזמנים שלי, מציגה את לוח הזמנים של התלמיד
  const handleMyScheduleClick =  async (date  = new Date()) => {
    const data = await getStudentData(date)
    console.log(date);
    setLoadingMySchedule(true);
    setDisplayedSchedule(data);
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
              <PopupComponent 
                onDateChanged={(date)=>setDate(date)}
              />
              <h2>My Conections</h2>
               {console.log(tokenID)}
              <h3 key={tokenID} className="button-like" onClick={() => handleMyScheduleClick(date)}>my schedule</h3>
              {connections && connections.connectionStudLec && (
                <ul>
                    {connections?.connectionStudLec?.map((connection, index) => (
                    <li key={index} onClick={() => handleConnectionsClick(connection, date)}>
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

