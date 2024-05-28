// src/Calendar.js

import React from "react";
import fetchData from '../../Pages/Scheduler/Scheduler'
import "./Calendar.css"; // Add some basic styling
import { getStudentData } from "./Scheduler.helper.js";
const Calendar = ({ schedule }) => {
  // Get the maximum number of lessons per day to set the number of rows
  const maxLessons = Math.max(...schedule.lessons.map((day) => day.length));

  return (
    <div className="calendar-container">
      <table className="calendar-table">
        <thead>
          <tr>
            {schedule.dates.map((date, index) => (
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
                    style={{ backgroundColor: lesson ? lesson.color : "white" }}
                  >
                    {lesson ? (
                      <>
                        <div>{lesson.time}</div>
                        <div>{lesson.status}</div>
                        <div>{lesson.coonLeng}</div>
                        <div>{lesson.lecname}</div>
                      </>
                    ) : null}
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
