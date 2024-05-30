// src/Calendar.js

import React from "react";
import fetchData from '../../Pages/Scheduler/Scheduler'
import "./Calendar.css"; // Add some basic styling
// import { getStudentData } from "../../Pages/Scheduler/Scheduler.helper.js";
// const schedule = getStudentData
const Calendar = ({ schedule }) => {
  console.log(schedule);
  if (!schedule) 
    return <div></div>

  // Get the maximum number of lessons per day to set the number of rows
  // const maxLessons = Math.max(...schedule.lessons.map((day) => day.length));
  const maxLessons = schedule && schedule.lessons 
        ? Math.max(...schedule.lessons.map((day) => day.length)) : 0;

  return (
    <div className="calendar-container">
      <table className="calendar-table">
        <thead>
          <tr className="y">
             {schedule?.dates?.map((date, index) => (
              <th  key={index}>{date}</th> 
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
                    style={{ backgroundColor: lesson.backgroundColor || "white" }}
                  >
                      <>
                      <div className="x">
                       {/* <div>{lesson.hour}</div> */}
                        <div>{lesson.hour ? lesson.hour : <span>&nbsp;</span>}</div>
                        {/* <div>{lesson.status}</div> */}
                        <div>{lesson.status ? lesson.status : <span>&nbsp;</span>}</div>
                        
                        {/* <div >{lesson.connLang}</div> */}
                        <div>{lesson.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
                          {/* {lesson.lecName} */}
                        <div>{lesson.lecName ? lesson.lecName : <span>&nbsp;</span>}</div>
                        
                        </div>
                      </>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
