




// import {Schedulerr} from '../../Pages/Scheduler/Scheduler.jsx';
import axios from "axios";
import { postSetLesson,getStudentData } from "../../Pages/Scheduler/Scheduler.helper";
import React, { useState } from "react";
import "./Calendar.css"; // ייבוא קובץ CSS לעיצוב בסיסי

const Calendar = ({ schedule, isLecture, connectionForId }) => {
  const [showPopupAv, setShowPopupAv] = useState(false);
  const [showPopupBocd, setShowPopupBocd] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [message, setMessage] = useState(""); // הוספת מצב להודעה
  const [lessonData, setLessonData] = useState({});
  const [studentMessage, setStudentMessage] = useState('');
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
      lessMessage: studentMessage
    };
    console.log(data);
    console.log(data.lessMessage);
   
    async function putmessage(data) {
      try {
        const res = await axios.put(`http://localhost:3008/api/lessonsStudLec/${data.lessID}`, { withCredentials: true });
        lessMessage: studentMessage
        return res.data;
      } catch (error) {
        console.error(error);
      }
    }
    // TODO: Send PUT request with the message
  };
  

  const handleClosePopupBocd = () => {
    setShowPopupBocd(false);
  };

  const addLesson = async () => {
    if (!connectionForId || !currentLesson) return;
    postSetLesson(
      currentLesson.hour,
      schedule.dates[schedule.lessons.findIndex(day => day.includes(currentLesson))],
      message,
      connectionForId
    );
    handleClosePopupAv();
    window.location.reload();
    window.location.reload();
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
    handleClosePopupBocd()
    window.location.reload();
    window.location.reload();

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
              
              {schedule?.dates?.map((date, index) => {
                {console.log(schedule);}
                const days_of_the_week =['Sunday','Monday','Tuesday','Wednesday','Thursday']
                return(
                <th key={index}>{days_of_the_week[index]}{<span>&nbsp;</span> }{date}</th>);
})}
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
                        {/* <div>{lesson?.status ? lesson.status : <span>&nbsp;</span>}</div> */}
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
          <div className="popup">
            <h2></h2>
            <p>תוכן הפופאפ</p>
            <form onSubmit={handleSendingMessage}>
              <div className="stack-container">
              <label htmlFor="message">שלח הודעה למרצה</label>
              <textarea
                id="message"
                onChange={(e) => setStudentMessage(e.target.value)}
              ></textarea>
              </div>
              <button onClick={handleClosePopupBocd} >שליחה</button>
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
