







import axios from "axios";
import { postSetLesson } from "../../Pages/Scheduler/Scheduler.helper";
import React, { useState } from "react";
import "./Calendar.css"; // ייבוא קובץ CSS לעיצוב בסיסי

const CalendarLecc = ({ scheduleLec, isLec, connectionLecId, specificConnection }) => {
  const [showPopupBocdL, setShowPopupBocdL] = useState(false);
  const [currentLessonL, setCurrentLessonL] = useState(null);
  const [messageL, setMessageL] = useState(""); // הוספת מצב להודעה
  const [lessonData, setLessonData] = useState({});
  const [studentMessage, setStudentMessage] = useState('');
  console.log(specificConnection);

  const handleOpenPopupBocd = () => {
    if (!isLec) return;
    setShowPopupBocdL(true);
  };

  const handleClosePopupBocd = () => {
    setShowPopupBocdL(false);
    setCurrentLessonL(null);
    setStudentMessage("");
  };

  const handleSendingMessage = async (e) => {
    e.preventDefault();

    if (studentMessage.trim() === "") {
      alert('הודעה ריקה לא נשלחה');
      return;
    }

    const data = {
      lessID: lessonData?.lesson.lessID,
      lessMessage: studentMessage
    };
    console.log(data);

    try {
      const res = await axios.put(`http://localhost:3008/api/lessonsStudLec/${data.lessID}`, { lessMessage: studentMessage, withCredentials: true });
      console.log('Message sent successfully');
      alert('הודעה נשלחה');
      handleClosePopupBocd(); // סגירת הפופאפ לאחר שליחת ההודעה
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const addLesson = async () => {
    if (!connectionLecId || !currentLessonL) return;
    console.log(connectionLecId);

    postSetLesson(
      currentLessonL.hour,
      scheduleLec.dates[scheduleLec.lessons.findIndex(day => day.includes(currentLessonL))],
      messageL,
      connectionLecId,
    );
    window.location.reload();
  };

  const lessonClick = (lesson, dayIndex) => {
    const data = { lesson: lesson, dayIndex: dayIndex }
    setLessonData(data);
    handleOpenPopupBocd();
  };

  const delLesson = async (lesson, dayIndex) => {
    const data = {
      lessID: lessonData.lesson.lessID
    };

    try {
      await axios.delete(`http://localhost:3008/api/lessonsStudLec/${data.lessID}`, { withCredentials: true });
      console.log('Lesson deleted successfully');
      handleClosePopupBocd();
      window.location.reload();
    } catch (error) {
      console.error('Error deleting lesson:', error);
    }
  };

  if (!scheduleLec) return <div></div>;

  const maxLessons = scheduleLec && scheduleLec.lessons
    ? Math.max(...scheduleLec.lessons.map((day) => day.length))
    : 0;
  console.log(currentLessonL);

  return (
    <>
      <div className="calendar-container">
        <table className="calendar-table">
          <thead>
            <tr className="y">
              {scheduleLec?.dates?.map((date, index) => {
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
                {scheduleLec.lessons.map((lessons, dayIndex) => {
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
                        {lesson?.status === 'not scheduled' &&
                          <h1>פנוי</h1>
                        }
                        {lesson?.status === 'scheduled' &&
                          <button onClick={() => lessonClick(lesson, dayIndex)}>
                          <p>
                            {specificConnection ? (
                             specificConnection.studID ? (
                                specificConnection.studID.studFName + " " + specificConnection.studID.studLName
                              ) : (
                                <span>&nbsp;</span>
                              )
                            ) : (
                              <span>&nbsp;</span>
                            )}
                          </p>
                          {specificConnection && specificConnection.connLang}
                        </button>
                        
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

      {showPopupBocdL && isLec && (
        <div className="popupBack">
          <div className="popup">
            <h2>שלח הודעה לסטודנט</h2>
            <form onSubmit={handleSendingMessage}>
              <div className="stack-container">
                <label htmlFor="message">הודעה:</label>
                <textarea
                  id="message"
                  value={studentMessage}
                  onChange={(e) => setStudentMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit">שליחה</button>
            </form>
            <button className="cancel-button" onClick={delLesson}>ביטול שיעור</button>
            <button className="close-button" onClick={handleClosePopupBocd}>סגור</button>
            <div className="messages">
              <h3>הודעות קודמות:</h3>
              {lessonData.lesson?.lessMessage?.length > 0 && lessonData.lesson.lessMessage.some(msg => msg.trim()) ? (
                lessonData.lesson.lessMessage.map((msg, index) => (
                  msg.trim() && <p key={index}>{msg}</p>
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

export default CalendarLecc;




