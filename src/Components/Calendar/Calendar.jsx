// src/Calendar.js
// import {postSetLesson} from "../../Pages/Scheduler/Scheduler.helper"
// import React,{useState,useEffect} from "react";
// import fetchData from '../../Pages/Scheduler/Scheduler'
// import "./Calendar.css"; // Add some basic styling
// import { Spinner } from 'react-bootstrap';
// // import { getStudentData } from "../../Pages/Scheduler/Scheduler.helper.js";
// // const schedule = getStudentData
// const Calendar = ({schedule,isLecture,connectionForId}) => {
//   const [showPopupAv, setShowPopupAv] = useState(false);
//   const [showPopupBocd, setShowPopupBocd] = useState(false);
//   const [SetLesson,setSetLesson] = useState({})
 
//   const fetchSetLesson = async () => {
//     const data = await postSetLesson();
//     setSetLesson(data)
//   }

//   useEffect(() => {
//     fetchSetLesson();
//   }, [])

//   const handleOpenPopupAv = () => {
//     if (!isLecture) return;
//     setShowPopupAv(true);
//     console.log(showPopupAv);
//   };

//   const handleClosePopupAv = () => {
//     setShowPopupAv(false);

//   };
//   const handleOpenPopupBocd = () => {
//     if (!isLecture) return;
//     setShowPopupBocd(true);
//   };
//   const handleClosePopupBocd = () => {
//     setShowPopupBocd(false);

//   };
//   const connectionID = connectionForId?.[0]._id
  
//   const addLesson=(hoer,date,messag,coonectionID)=>{
//     handleOpenPopupAv()
//     postSetLesson(hoer,date,messag,coonectionID)

//   }
//   const delLesson=(lesson,dayIndex)=>{
//     handleOpenPopupBocd()

//   }
//   if (!schedule) 
//     return <div></div>

//   // Get the maximum number of lessons per day to set the number of rows
//   // const maxLessons = Math.max(...schedule.lessons.map((day) => day.length));
//   const maxLessons = schedule && schedule.lessons 
//         ? Math.max(...schedule.lessons.map((day) => day.length)) : 0;
  

//   return (<>
//     <div className="calendar-container">
      
//       <table className="calendar-table">
        
//         <thead>
        
//           <tr className="y">
//              {schedule?.dates?.map((date, index) => (
              
//               <th  key={index}>{date}</th> 
              
//              ))} 
//           </tr>
//         </thead>
//         <tbody>

//           {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
//             <tr key={lessonIndex}>
//               {schedule.lessons.map((lessons, dayIndex) => {
//                 const lesson = lessons[lessonIndex];
//                 return (
                  
//                   <td
//                     key={dayIndex}
//                     style={{ backgroundColor: lesson.backgroundColor || "white" }}
//                   >
//                       <>
//                       <div className="x">
                        
//                        {/* <div>{lesson.hour}</div> */}
//                         <div>{lesson.hour ? lesson.hour : <span>&nbsp;</span>}</div>
//                         {/* <div>{lesson.status}</div> */}
//                         <div>{lesson.status ? lesson.status : <span>&nbsp;</span>}</div>
                        
//                         {/* <div >{lesson.connLang}</div> */}
//                         <div>{lesson.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
//                           {/* {lesson.lecName} */}
//                         <div>{lesson.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
//                       {/* connectionForId && */}
                       
                        
         
//                         {lesson.status==='available'&&  <button onClick={()=>addLesson(lesson.hour,schedule.dates[dayIndex],'הודעה',connectionID)}>קבע שיעור</button>}
//                         {lesson.status==='already scheduled'&&  <button onClick={()=>delLesson(lesson,dayIndex)}>לפרטים נוספים</button>}  </div>
                        

//                       </>
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//     </div>
    
//     {showPopupAv && isLecture &&(
//       <div className="popupBack">
//       <div className="popup">
//         <h2>קבע שיעור</h2>
//         <p>תוכן הפופאפ</p>
//         <button onClick={handleClosePopupAv}>סגור</button>
//       </div>
//       </div>
      
//     )}
//     {showPopupBocd && isLecture &&(
//       <div className="popupBack">
//       <div className="popupp">
//         <h2>לפרטים</h2>
//         <p>תוכן הפופאפ</p>
//         <button onClick={handleClosePopupBocd}>סגור</button>
//       </div>
//       </div>
      
//     )}
//     </>
//   );
// };

// export default Calendar;





import {postSetLesson} from "../../Pages/Scheduler/Scheduler.helper"
import React,{useState,useEffect} from "react";
import fetchData from '../../Pages/Scheduler/Scheduler'
import "./Calendar.css"; // Add some basic styling
import { Spinner } from 'react-bootstrap';

const Calendar = ({schedule,isLecture,connectionForId}) => {
  const [showPopupAv, setShowPopupAv] = useState(false);
  const [showPopupBocd, setShowPopupBocd] = useState(false);
 

  const handleOpenPopupAv = () => {
    if (!isLecture) return;
    setShowPopupAv(true);
    console.log(showPopupAv);
  };

  const handleClosePopupAv = () => {
    setShowPopupAv(false);
  };

  const handleOpenPopupBocd = () => {
    if (!isLecture) return;
    setShowPopupBocd(true);
  };

  const handleClosePopupBocd = () => {
    setShowPopupBocd(false);
  };

  // const connectionID = connectionForId?.connectionStudLec[0]?._id || null;
  // console.log(connectionID);
  const addLesson = (hoer, date, messag ) => {
    if(!connectionForId)return
    handleOpenPopupAv();
    postSetLesson(hoer, date, messag,connectionForId);

  }

  const delLesson = (lesson, dayIndex) => {
    handleOpenPopupBocd();
  }

  if (!schedule) 
    return <div></div>

  const maxLessons = schedule && schedule.lessons 
        ? Math.max(...schedule.lessons.map((day) => day.length)) : 0;
  
  return (
    <>
      <div className="calendar-container">
        <table className="calendar-table">
          <thead>
            <tr className="y">
              {schedule?.dates?.map((date, index) => (
                <th key={index}>{date}</th> 
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
              <tr key={lessonIndex}>
                {schedule.lessons.map((lessons, dayIndex) => {
                  const lesson = lessons[lessonIndex];
                  
                  return (
                    <td
                      key={dayIndex}
                      style={{ backgroundColor: lesson?.backgroundColor || "white" }}
                    >
                      <div className="x">
                        <div>{lesson?.hour ? lesson.hour : <span>&nbsp;</span>}</div>
                        <div>{lesson?.status ? lesson.status : <span>&nbsp;</span>}</div>
                        <div>{lesson?.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
                        <div>{lesson?.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
                        {lesson?.status === 'available' &&  
                          <button onClick={() => addLesson(lesson.hour, schedule.dates[dayIndex], 'הודעה' )}>קבע שיעור</button>
                        }
                        {lesson?.status === 'already scheduled' &&  
                          <button onClick={() => delLesson(lesson, dayIndex)}>לפרטים נוספים</button>
                        }
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {showPopupAv && isLecture && (
        <div className="popupBack">
          <div className="popup">
            <h2>קבע שיעור</h2>
            <p>תוכן הפופאפ</p>
            <button onClick={handleClosePopupAv}>סגור</button>
          </div>
        </div>
      )}

      {showPopupBocd && isLecture && (
        <div className="popupBack">
          <div className="popupp">
            <h2>לפרטים</h2>
            <p>תוכן הפופאפ</p>
            <button onClick={handleClosePopupBocd}>סגור</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;
