


import axios from "axios";
import { postSetLesson, getStudentData } from "../../Pages/Scheduler/Scheduler.helper";
import React, { useState, useEffect } from "react";
import "./Calendar.css"; // ייבוא קובץ CSS לעיצוב בסיסי

const Calendar = ({ schedule, isLecture, connectionForId,specificConnection }) => {
  const [showPopupAv, setShowPopupAv] = useState(false);
  const [showPopupBocd, setShowPopupBocd] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [message, setMessage] = useState(""); // הוספת מצב להודעה
  const [lessonData, setLessonData] = useState({});
  const [studentMessage, setStudentMessage] = useState('');
  const [updatedSchedule, setUpdatedSchedule] = useState(schedule);

  useEffect(() => {
    setUpdatedSchedule(schedule);
  }, [schedule]);

  const refreshSchedule = async () => {
    try {
      const updatedData = await getStudentData(new Date()); // זוהי הפונקציה לקבלת הנתונים המעודכנים
      setUpdatedSchedule(updatedData);
    } catch (error) {
      console.error('Error refreshing schedule:', error);
    }
  };

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

  // const handleSendingMessage = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     lessID: lessonData.lesson.lessID,
  //     lessMessage: studentMessage
  //   };
  //   putmessage(data)
  //   async function putmessage(data) {
  //     try {
  //       let res = await axios.put(`http://localhost:3008/api/lessonsStudLec/messages/${data.lessID}`, {
  //         withCredentials: true,
  //         data: { lessMessage: studentMessage }
  //       });
  //       alert('ההודעה נשלחה בהצלחה');
  //       return res.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   handleClosePopupBocd()

  //   await putmessage(data);
  //   await refreshSchedule();
  // };


  const handleSendingMessage = async (e) => {
    e.preventDefault();
  
    if (studentMessage.trim() === "") {
      alert('הודעה ריקה לא נשלחה');
      return;
    }
  
    const data = {
      lessID: lessonData.lesson.lessID,
      lessMessage: studentMessage
    };
  
    try {
      const res = await axios.put(`http://localhost:3008/api/lessonsStudLec/messages/${data.lessID}`, 
        { lessMessage: studentMessage }, 
        { withCredentials: true }
      );
      alert('ההודעה נשלחה בהצלחה');
      handleClosePopupBocd();
      await refreshSchedule();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  const handleClosePopupBocd = () => {
    return new Promise((resolve) => {
      setShowPopupBocd(false);
      resolve();
    });
  };

  const addLesson = async () => {
    if (!connectionForId || !currentLesson) return;
    await postSetLesson(
      currentLesson.hour,
      schedule.dates[schedule.lessons.findIndex(day => day.includes(currentLesson))],
      message,
      connectionForId
    );
    handleClosePopupAv();
    await refreshSchedule();
  };

  const lessonClick = (lesson, dayIndex) => {
    let formass = { lesson: lesson, dayIndex: dayIndex };
    setLessonData(formass);
    console.log(lesson.lessID);
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
    await handleClosePopupBocd();
    await refreshSchedule();
  };

  async function deleteLess(lessID) {
    try {
      let res = await axios.delete(`http://localhost:3008/api/lessonsStudLec/${lessID}`, { withCredentials: true });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  if (!updatedSchedule) return <div></div>;

  const maxLessons = updatedSchedule && updatedSchedule.lessons
    ? Math.max(...updatedSchedule.lessons.map((day) => day.length))
    : 0;

  return (
    <>
      <div className="calendar-container">
        <table className="calendar-table">
          <thead>
            <tr className="y">
              {updatedSchedule?.dates?.map((date, index) => {
                const days_of_the_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
                return (
                  <th key={index}>{days_of_the_week[index]}<span>&nbsp;</span>{date}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
              <tr key={lessonIndex}>
                {updatedSchedule.lessons.map((lessons, dayIndex) => {
                  const lesson = lessons[lessonIndex];
                  return (
                    <td
                      key={dayIndex}
                      style={{ backgroundColor: lesson?.backgroundColor || "white" }}
                    >
                      <div className="x">
                        <div>{lesson?.hour ? lesson.hour : <span>&nbsp;</span>}</div>
                        <div>{lesson?.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
                        <div>{lesson?.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
                        {lesson?.status === 'available' &&
                          <button onClick={() => handleOpenPopupAv(lesson)}>קבע שיעור</button>
                        }
                        {lesson?.status === 'already scheduled' &&
                        
                          <button onClick={() => lessonClick(lesson, dayIndex)}> יש לך שיעור </button>
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
          <div className="popup">
            <h2></h2>
            
            <form onSubmit={handleSendingMessage}>
              <div className="stack-container">
                <label htmlFor="message">שלח הודעה למרצה</label>
                <textarea
                  id="message"
                  onChange={(e) => setStudentMessage(e.target.value)}
                ></textarea>
              </div>
              <button  type="submit"  >שליחה</button>
            </form>
            <button onClick={delLesson}>ביטול שיעור</button>
            <button onClick={handleClosePopupBocd}>סגור</button>
            <div className="messages">
              <h3>הודעות קודמות:</h3>
              {lessonData.lesson?.lessMessage && lessonData.lesson.lessMessage.length > 0 && lessonData.lesson.lessMessage.some(msg => msg && typeof msg === 'string' && msg.trim()) ? (
                lessonData.lesson.lessMessage.map((msg, index) => (
                  msg && typeof msg === 'string' && msg.trim() && <p key={index}>{msg.trim()}</p>
                ))
              ) : (
                <p>אין הודעות</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;







