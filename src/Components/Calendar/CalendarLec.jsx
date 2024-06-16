// import './CalendarLec.css';

// const CalendarLec = ({scheduleLec,isLec})=>{
//     const maxLessons = scheduleLec && scheduleLec.lessons
//     ? Math.max(...scheduleLec.lessons.map((day) => day.length))
//     : 0;
//     console.log(scheduleLec);
// return(
//     <>
//     <div className='calendar-container'>
//         <table className="calendar-table">
//         <thead>
//             <tr className='y'>
//             {scheduleLec?.dates?.map((date, index) => {

//                 const days_of_the_week =['Sunday','Monday','Tuesday','Wednesday','Thursday']
//                 return(
//                 <th key={index}>{days_of_the_week[index]}{<span>&nbsp;</span> }{date}</th>);
//                 })}
//             </tr>
//         </thead>
//         <tbody>
//         {Array.from({ length: maxLessons }).map((_, lessonIndex) => (
//               <tr key={lessonIndex}>
//                 {scheduleLec.scheduleLec.lessons.map((lessons, dayIndex) => {
//                   const lesson = lessons[lessonIndex];
//                   return (
//                     <td
//                       key={dayIndex}
//                       style={{ backgroundColor: lesson?.backgroundColor || "white" }}
//                     >
//                       <div className="x">
//                         <div>{lesson?.hour ? lesson.hour : <span>&nbsp;</span>}</div>

//                         {/* <div>{lesson?.connLang ? lesson.connLang : <span>&nbsp;</span>}</div>
//                         <div>{lesson?.lecName ? lesson.lecName : <span>&nbsp;</span>}</div> */}
//                         {/* {lesson?.status === 'available' &&
//                           <button onClick={() => handleOpenPopupAv(lesson)}>קבע שיעור</button>
//                         }
//                         {lesson?.status === 'already scheduled' &&
//                           <button onClick={() => lessonClick(lesson, dayIndex)}>לפרטים נוספים</button>
//                         } */}
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//         </tbody>
//         </table>
//     </div>
//     </>
// );



// }
// export default CalendarLec;




import './CalendarLec.css';

const CalendarLec = ({ scheduleLec, isLec }) => {
    const maxLessons = scheduleLec && scheduleLec.lessons
        ? Math.max(...scheduleLec.lessons.map((day) => day.length))
        : 0;
    console.log(scheduleLec);

    return (
        <>
            <div className='calendar-container'>
                <table className="calendar-table">
                    <thead>
                        <tr className='y'>
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
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CalendarLec;
