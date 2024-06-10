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





// import {postSetLesson} from "../../Pages/Scheduler/Scheduler.helper"
// import React,{useState,useEffect} from "react";
// import fetchData from '../../Pages/Scheduler/Scheduler'
// import "./Calendar.css"; // Add some basic styling
// import { Spinner } from 'react-bootstrap';

// const Calendar = ({schedule,isLecture,connectionForId}) => {
//   const [showPopupAv, setShowPopupAv] = useState(false);
//   const [showPopupBocd, setShowPopupBocd] = useState(false);


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


//   const addLesson = (hoer, date, messag ) => {
//     if(!connectionForId)return

//     postSetLesson(hoer, date, messag,connectionForId);
//     handleOpenPopupAv();
//   }



//   const delLesson = (lesson, dayIndex) => {
//     handleOpenPopupBocd();
//   }

//   if (!schedule) 
//     return <div></div>

//   const maxLessons = schedule && schedule.lessons 
//         ? Math.max(...schedule.lessons.map((day) => day.length)) : 0;

//   return (
//     <>
//       <div className="calendar-container">
//         <table className="calendar-table">
//           <thead>
//             <tr className="y">
//               {schedule?.dates?.map((date, index) => (
//                 <th key={index}>{date}</th> 
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
//               <tr key={lessonIndex}>
//                 {schedule.lessons.map((lessons, dayIndex) => {
//                   const lesson = lessons[lessonIndex];

//                   return (
//                     <td
//                       key={dayIndex}
//                       style={{ backgroundColor: lesson?.backgroundColor || "white" }}
//                     >
//                       <div className="x">
//                         <div>{lesson?.hour ? lesson.hour : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.status ? lesson.status : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
//                         {lesson?.status === 'available' &&  
//                           <button onClick={() => addLesson(lesson.hour, schedule.dates[dayIndex], 'הודעה' )}>קבע שיעור</button>
//                         }
//                         {lesson?.status === 'already scheduled' &&  
//                           <button onClick={() => delLesson(lesson, dayIndex)}>לפרטים נוספים</button>
//                         }
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showPopupAv && isLecture && (
//         <div className="popupBack">
//           <div className="popup">
//             <h2>קבע שיעור</h2>
//             <p>תוכן הפופאפ</p>
//             {/* <input type="text" /> */}
//             <button onClick={addLesson()}>לקביעת שיעור </button>
//             <button onClick={handleClosePopupAv}>סגור</button>
//           </div>
//         </div>
//       )}

//       {showPopupBocd && isLecture && (
//         <div className="popupBack">
//           <div className="popupp">
//             <h2>לפרטים</h2>
//             <p>תוכן הפופאפ</p>
//             <button onClick={handleClosePopupBocd}>סגור</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Calendar;

// import { postSetLesson } from "../../Pages/Scheduler/Scheduler.helper";
// import React, { useState } from "react";
// import "./Calendar.css"; // ייבוא קובץ CSS לעיצוב בסיסי

// const Calendar = ({ schedule, isLecture, connectionForId }) => {
//   const [showPopupAv, setShowPopupAv] = useState(false);
//   const [showPopupBocd, setShowPopupBocd] = useState(false);
//   const [currentLesson, setCurrentLesson] = useState(null);

//   const handleOpenPopupAv = (lesson) => {
//     if (!isLecture) return;
//     setCurrentLesson(lesson);
//     setShowPopupAv(true);
//   };

//   const handleClosePopupAv = () => {
//     setShowPopupAv(false);
//     setCurrentLesson(null);
//   };

//   const handleOpenPopupBocd = () => {
//     if (!isLecture) return;
//     setShowPopupBocd(true);
//   };

//   const handleClosePopupBocd = () => {
//     setShowPopupBocd(false);
//   };

//   const addLesson = (hoer, date, messag) => {
//     if (!connectionForId) return;
//     postSetLesson(hoer, date, messag, connectionForId);
//     handleClosePopupAv();
//   };

//   const delLesson = (lesson, dayIndex) => {
//     handleOpenPopupBocd();
//   };

//   if (!schedule) return <div></div>;

//   const maxLessons = schedule && schedule.lessons 
//     ? Math.max(...schedule.lessons.map((day) => day.length)) 
//     : 0;

//   return (
//     <>
//       <div className="calendar-container">
//         <table className="calendar-table">
//           <thead>
//             <tr className="y">
//               {schedule?.dates?.map((date, index) => (
//                 <th key={index}>{date}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
//               <tr key={lessonIndex}>
//                 {schedule.lessons.map((lessons, dayIndex) => {
//                   const lesson = lessons[lessonIndex];
//                   return (
//                     <td
//                       key={dayIndex}
//                       style={{ backgroundColor: lesson?.backgroundColor || "white" }}
//                     >
//                       <div className="x">
//                         <div>{lesson?.hour ? lesson.hour : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.status ? lesson.status : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
//                         {lesson?.status === 'available' &&  
//                           <button onClick={() => handleOpenPopupAv(lesson)}>קבע שיעור</button>
//                         }
//                         {lesson?.status === 'already scheduled' &&  
//                           <button onClick={() => delLesson(lesson, dayIndex)}>לפרטים נוספים</button>
//                         }
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showPopupAv && isLecture && (
//         <div className="popupBack">
//           <div className="popup">
//             <h2>קבע שיעור</h2>
//             <p>תוכן הפופאפ</p>
//             <button onClick={() => addLesson(currentLesson.hour, schedule.dates[schedule.lessons.findIndex(day => day.includes(currentLesson))], 'הודעה')}>לקביעת שיעור</button>
//             <button onClick={handleClosePopupAv}>סגור</button>
//           </div>
//         </div>
//       )}

//       {showPopupBocd && isLecture && (
//         <div className="popupBack">
//           <div className="popupp">
//             <h2>לפרטים</h2>
//             <p>תוכן הפופאפ</p>
//             <button onClick={handleClosePopupBocd}>סגור</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Calendar;

// import { postSetLesson } from "../../Pages/Scheduler/Scheduler.helper";
// import React, { useState } from "react";
// import "./Calendar.css"; // ייבוא קובץ CSS לעיצוב בסיסי

// const Calendar = ({ schedule, isLecture, connectionForId }) => {
//   const [showPopupAv, setShowPopupAv] = useState(false);
//   const [showPopupBocd, setShowPopupBocd] = useState(false);
//   const [currentLesson, setCurrentLesson] = useState(null);

//   const handleOpenPopupAv = (lesson) => {
//     if (!isLecture) return;
//     setCurrentLesson(lesson);
//     setShowPopupAv(true);
//   };

//   const handleClosePopupAv = () => {
//     setShowPopupAv(false);
//     setCurrentLesson(null);
//   };

//   const handleOpenPopupBocd = () => {
//     if (!isLecture) return;
//     setShowPopupBocd(true);
//   };

//   const handleClosePopupBocd = () => {
//     setShowPopupBocd(false);
//   };

//   const addLesson = (hoer, date, messag) => {
//     if (!connectionForId) return;
//     postSetLesson(hoer, date, messag, connectionForId);
//     handleClosePopupAv();
//   };

//   const delLesson = (lesson, dayIndex) => {
//     handleOpenPopupBocd();
//   };

//   if (!schedule) return <div></div>;

//   const maxLessons = schedule && schedule.lessons 
//     ? Math.max(...schedule.lessons.map((day) => day.length)) 
//     : 0;

//   return (
//     <>
//       <div className="calendar-container">
//         <table className="calendar-table">
//           <thead>
//             <tr className="y">
//               {schedule?.dates?.map((date, index) => (
//                 <th key={index}>{date}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
//               <tr key={lessonIndex}>
//                 {schedule.lessons.map((lessons, dayIndex) => {
//                   const lesson = lessons[lessonIndex];
//                   return (
//                     <td
//                       key={dayIndex}
//                       style={{ backgroundColor: lesson?.backgroundColor || "white" }}
//                     >
//                       <div className="x">
//                         <div>{lesson?.hour ? lesson.hour : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.status ? lesson.status : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
//                         {lesson?.status === 'available' &&  
//                           <button onClick={() => handleOpenPopupAv(lesson)}>קבע שיעור</button>
//                         }
//                         {lesson?.status === 'already scheduled' &&  
//                           <button onClick={() => delLesson(lesson, dayIndex)}>לפרטים נוספים</button>
//                         }
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showPopupAv && isLecture && (
//         <div className="popupBack">
//           <div className="popup">
//             <h2>קבע שיעור</h2>
//             <p>תוכן הפופאפ</p>
//             <button onClick={() => addLesson(currentLesson.hour, schedule.dates[schedule.lessons.findIndex(day => day.includes(currentLesson))], 'הודעה')}>לקביעת שיעור</button>
//             <button onClick={handleClosePopupAv}>סגור</button>
//           </div>
//         </div>
//       )}

//       {showPopupBocd && isLecture && (
//         <div className="popupBack">
//           <div className="popupp">
//             <h2>לפרטים</h2>
//             <p>תוכן הפופאפ</p>
//             <button onClick={handleClosePopupBocd}>סגור</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Calendar;



// import axios from "axios";
// import { postSetLesson } from "../../Pages/Scheduler/Scheduler.helper";
// import React, { useState } from "react";
// import "./Calendar.css"; // ייבוא קובץ CSS לעיצוב בסיסי

// const Calendar = ({ schedule, isLecture, connectionForId }) => {
//   const [showPopupAv, setShowPopupAv] = useState(false);
//   const [showPopupBocd, setShowPopupBocd] = useState(false);
//   const [currentLesson, setCurrentLesson] = useState(null);
//   const [message, setMessage] = useState(""); // הוספת מצב להודעה
 
//   const [lessonData, setLessonData] = useState({});
//   const [lectureMessage, setLectureMessage] = useState('');
//   const []
//   const handleOpenPopupAv = (lesson) => {
//     if (!isLecture) return;
//     setCurrentLesson(lesson);
//     setShowPopupAv(true);
//   };

//   const handleClosePopupAv = () => {
//     setShowPopupAv(false);
//     setCurrentLesson(null);
//     setMessage(""); // איפוס ההודעה בעת סגירת הפופאפ
//   };

//   const handleOpenPopupBocd = () => {
//     if (!isLecture) return;
//     setShowPopupBocd(true);
//   };

//   const handleSendingMessage = async(e) => {
//     e.preventDefault();

//     const data = {
//       lessID: lessonData.lesson.lessID,
//       lessMessage: lectureMessage
//     }
//     console.log(data.lessID);
//     console.log(data.lessMessage);
    
//   // const fetchdeleteLess = async() =>{
//   //   const data = await deleteLess()
//   // }
//   // async function handleDelete(data) {
//   //   try {
//   //     const result = await deleteLess(data.lessID);
//   //     console.log('Deletion successful:', result);
//   //     // ביצוע פעולות נוספות אחרי המחיקה
//   //   } catch (error) {
//   //     console.error('Deletion failed:', error);
//   //   }
//   // }
//     // TODO: Send PUT request with the message
//     //await axios
//   }

//   const handleClosePopupBocd = () => {
//     setShowPopupBocd(false);
//   };

//   const addLesson = () => {
//     if (!connectionForId || !currentLesson) return;
//     postSetLesson(currentLesson.hour, schedule.dates[schedule.lessons.findIndex(day => day.includes(currentLesson))], message, connectionForId);
//     handleClosePopupAv();
//   };

//   const lessonClick = (lesson, dayIndex) => {
//     setLessonData({ lesson, dayIndex })
//     handleOpenPopupBocd();
//   };

//   const delLesson = async () => { 
//     const data = {
//       lessID: lessonData.lesson.lessID
      
//     }
//     async function deleteLess(data) {
//       try {
    
//         const res = await axios.delete(`http://localhost:3008/api/lessonsStudLec${data.lessID}`, { withCredentials: true });
        
//         return res.data
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     // TODO: send DELETE request

//   }
//   if (!schedule) return <div></div>;

//   const maxLessons = schedule && schedule.lessons
//     ? Math.max(...schedule.lessons.map((day) => day.length))
//     : 0;

//   return (
//     <>
//       <div className="calendar-container">
//         <table className="calendar-table">
//           <thead>
//             <tr className="y">

//               {schedule?.dates?.map((date, index) => (

//                 <th key={index}>{date}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
//               <tr key={lessonIndex}>
//                 {schedule.lessons.map((lessons, dayIndex) => {
//                   const lesson = lessons[lessonIndex];
//                   return (
//                     <td
//                       key={dayIndex}
//                       style={{ backgroundColor: lesson?.backgroundColor || "white" }}
//                     >
//                       <div className="x">
//                         <div>{lesson?.hour ? lesson.hour : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.status ? lesson.status : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
//                         {lesson?.status === 'available' &&
//                           <button onClick={() => handleOpenPopupAv(lesson)}>קבע שיעור</button>
//                         }
//                         {lesson?.status === 'already scheduled' &&
//                           <button onClick={() => lessonClick(lesson, dayIndex)}>לפרטים נוספים</button>
//                         }
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showPopupAv && isLecture && (
//         <div className="popupBack">
//           <div className="popup">
//             <h2>קבע שיעור</h2>
//             <p>לקביעת שיעור</p>


//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="כתוב למרצה"
//             />
//             <button onClick={addLesson}>לקביעת שיעור</button>
//             <button onClick={handleClosePopupAv}>סגור</button>
//           </div>
//         </div>
//       )}


//       {showPopupBocd && isLecture && (
//         <div className="popupBack">
//           <div className="popupp">
//             <h2>לפרטים</h2>
//             <p>תוכן הפופאפ</p>

//             <form onSubmit={handleSendingMessage}>
//               <label htmlFor="message">שלח הודעה למרצה</label>
//               <textarea id="message"
//                 onChange={(e) => setLectureMessage(e.target.value)}
//               ></textarea>
//               <button>שליחה</button>
//             </form>

//             <button onClick={delLesson}>ביטול שיעור</button>

//             <button onClick={handleClosePopupBocd}>סגור</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Calendar;





import axios from "axios";
import { postSetLesson } from "../../Pages/Scheduler/Scheduler.helper";
import React, { useState } from "react";
import "./Calendar.css"; // ייבוא קובץ CSS לעיצוב בסיסי

const Calendar = ({ schedule, isLecture, connectionForId }) => {
  const [showPopupAv, setShowPopupAv] = useState(false);
  const [showPopupBocd, setShowPopupBocd] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [message, setMessage] = useState(""); // הוספת מצב להודעה
  const [lessonData, setLessonData] = useState({});
  const [lectureMessage, setLectureMessage] = useState('');

  const handleOpenPopupAv = (lesson) => {
    if (!isLecture) return;
    setCurrentLesson(lesson);
    setShowPopupAv(true);
  };

  const handleClosePopupAv = () => {
    setShowPopupAv(false);
    setCurrentLesson(null);
    setMessage(""); // איפוס ההודעה בעת סגירת הפופאפ
  };

  const handleOpenPopupBocd = () => {
    if (!isLecture) return;
    setShowPopupBocd(true);
  };

  const handleSendingMessage = async (e) => {
    e.preventDefault();

    const data = {
      lessID: lessonData.lesson.lessID,
      lessMessage: lectureMessage
    };
    console.log(data.lessID);
    console.log(data.lessMessage);

    // TODO: Send PUT request with the message
  };

  const handleClosePopupBocd = () => {
    setShowPopupBocd(false);
  };

  const addLesson = () => {
    if (!connectionForId || !currentLesson) return;
    postSetLesson(
      currentLesson.hour,
      schedule.dates[schedule.lessons.findIndex(day => day.includes(currentLesson))],
      message,
      connectionForId
    );
    handleClosePopupAv();
  };

  const lessonClick = (lesson, dayIndex) => {
    setLessonData({ lesson, dayIndex });
    handleOpenPopupBocd();
  };

  const delLesson = async () => {
    const data = {
      lessID: lessonData.lesson.lessID
    };

    try {
      await deleteLess(data.lessID);
      console.log('Lesson deleted successfully');
    } catch (error) {
      console.error('Error deleting lesson:', error);
    }
  };

  async function deleteLess(lessID) {
    try {
      const res = await axios.delete(`http://localhost:3008/api/lessonsStudLec/${lessID}`, { withCredentials: true });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  if (!schedule) return <div></div>;

  const maxLessons = schedule && schedule.lessons
    ? Math.max(...schedule.lessons.map((day) => day.length))
    : 0;

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
                          <button onClick={() => handleOpenPopupAv(lesson)}>קבע שיעור</button>
                        }
                        {lesson?.status === 'already scheduled' &&
                          <button onClick={() => lessonClick(lesson, dayIndex)}>לפרטים נוספים</button>
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
            <p>לקביעת שיעור</p>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="כתוב למרצה"
            />
            <button onClick={addLesson}>לקביעת שיעור</button>
            <button onClick={handleClosePopupAv}>סגור</button>
          </div>
        </div>
      )}

      {showPopupBocd && isLecture && (
        <div className="popupBack">
          <div className="popupp">
            <h2>לפרטים</h2>
            <p>תוכן הפופאפ</p>
            <form onSubmit={handleSendingMessage}>
              <label htmlFor="message">שלח הודעה למרצה</label>
              <textarea
                id="message"
                onChange={(e) => setLectureMessage(e.target.value)}
              ></textarea>
              <button>שליחה</button>
            </form>
            <button onClick={delLesson}>ביטול שיעור</button>
            <button onClick={handleClosePopupBocd}>סגור</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;
