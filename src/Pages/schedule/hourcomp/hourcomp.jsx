import { useState } from "react";
const hours =   [
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00']
  const [hour, sethour] = useState(hours); 

  const studentSchedule = {
    dates: ['1.1.24', '2.1.24','3.1.24','4.1.24','5.1.24'], //...
    lessons: [
        [{ time: '6:00',title: 'English lesson' }, { time: '7:00', title: 'English lesson' }, { time: '8:00' }], // 1.1.24
        [{ time: '6:00',titel:'already scheduled' }, { time: '7:00', title: 'English lesson' }, { time: '8:00',titel:'already scheduled' },{time:'9:00',titel:'unavailable'},{time:'10:00',titel:'unavailable'}], // 2.1.24
        [{ time: '6:00' }, { time: '7:00', title: 'English lesson' }, { time: '8:00' },{time:'9:00',titel:'unavailable'},{time:'10:00',titel:'unavailable'}], 
        [{ time: '6:00' }, { time: '7:00', title: 'English lesson' }, { time: '8:00' },{time:'9:00',titel:'unavailable'},{time:'10:00',titel:'unavailable'}], // 2.1.24
        [{ time: '6:00' }, { time: '7:00', title: 'English lesson' }, { time: '8:00' },{time:'9:00',titel:'unavailable'},{time:'10:00',titel:'unavailable'}] // 2.1.24
        
    ]
}
const [studentSch,setstudentSch] = useState(studentSchedule)

  const studentScheduleActive = {
    dates: ['1.1.24', '2.1.24','3.1.24','4.1.24','5.1.24'], 
    lessons: [
        [{ time: '6:00', status: 'available',color:'green' }, { time: '7:00', status:'not working', color: 'grey' },{ time: '8:00', status:'not working', color: 'grey' }, { time: '9:00', status:'not working', color: 'grey' },{ time: '10:00', status:'not working', color: 'grey' },{ time: '11:00', status:'not working', color: 'grey' },{ time: '12:00', status:'not working', color: 'grey' },{ time: '13:00', status:'not working', color: 'grey' },{ time: '14:00', status:'not working', color: 'grey' },{ time: '15:00', status:'not working', color: 'grey' },
        { time: '6:00', status: 'available',color:'green' }, { time: '7:00', status:'not working', color: 'grey' },{ time: '8:00', status:'not working', color: 'grey' }, { time: '9:00', status:'not working', color: 'grey' },{ time: '10:00', status:'not working', color: 'grey' },{ time: '11:00', status:'not working', color: 'grey' },{ time: '12:00', status:'not working', color: 'grey' },{ time: '13:00', status:'not working', color: 'grey' },{ time: '14:00', status:'not working', color: 'grey' },{ time: '15:00', status:'not working', color: 'grey' },
        { time: '6:00', status: 'available',color:'green' }, { time: '7:00', status:'not working', color: 'grey' },{ time: '8:00', status:'not working', color: 'grey' }, { time: '9:00', status:'not working', color: 'grey' },{ time: '10:00', status:'not working', color: 'grey' },{ time: '11:00', status:'not working', color: 'grey' },{ time: '12:00', status:'not working', color: 'grey' },{ time: '13:00', status:'not working', color: 'grey' },{ time: '14:00', status:'not working', color: 'grey' },{ time: '15:00', status:'not working', color: 'grey' },
        { time: '6:00', status: 'available',color:'green' }, { time: '7:00', status:'not working', color: 'grey' },{ time: '8:00', status:'not working', color: 'grey' }, { time: '9:00', status:'not working', color: 'grey' },{ time: '10:00', status:'not working', color: 'grey' },{ time: '11:00', status:'not working', color: 'grey' },{ time: '12:00', status:'not working', color: 'grey' },{ time: '13:00', status:'not working', color: 'grey' },{ time: '14:00', status:'not working', color: 'grey' },{ time: '15:00', status:'not working', color: 'grey' },
        { time: '6:00', status: 'available',color:'green' }, { time: '7:00', status:'not working', color: 'grey' },{ time: '8:00', status:'not working', color: 'grey' }, { time: '9:00', status:'not working', color: 'grey' },{ time: '10:00', status:'not working', color: 'grey' },{ time: '11:00', status:'not working', color: 'grey' },{ time: '12:00', status:'not working', color: 'grey' },{ time: '13:00', status:'not working', color: 'grey' },{ time: '14:00', status:'not working', color: 'grey' },{ time: '15:00', status:'not working', color: 'grey' }]
]}
const [active,setactive] = useState(studentScheduleActive)



const Hourcomp = ({hour}) => {
  return (
    <div>
      <HourCard/>
      <h4>Hourcomp</h4>
      
    </div>
    
  )
}
const HourCard = ({  }) => {
  return (
   
    <div className="HourCard" key={lessons.time}>
      <div className="huer-details">
        <h5>{sethour.time}</h5>

      </div>
    </div>
  );
};





// const HourComp = ({ 
//   hour, 
//   day, 
//   lecturerSchedule, 
//   scheduledClasses, 
//   lecturerId, 
//   studentClasses, 
//   studentId 
// }) => {
//   // Check if lecturer teaches at this hour
//   const isLecturerAvailable = lecturerSchedule.includes(hour);

//   // Check if there is a class scheduled for the lecturer at this time
//   const isClassScheduled = scheduledClasses.some(
//     cls => cls.date === day && cls.time === hour && cls.lecturerId === lecturerId
//   );

//   // Check if the student has a class at this time
//   const isStudentScheduled = studentClasses.some(
//     cls => cls.date === day && cls.time === hour && cls.studentId === studentId
//   );

//   // Determine the display based on the checks
//   let classStatus = 'free';
//   if (isClassScheduled) {
//     classStatus = 'lecturer-busy';
//   } else if (isStudentScheduled) {
//     classStatus = 'student-busy';
//   } else if (!isLecturerAvailable) {
//     classStatus = 'lecturer-not-available';
//   }

//   return (
//     <div className={`hour ${classStatus}`}>
//       {hour} - {classStatus.replace('-', ' ')}
//     </div>
//   );
// };


export default Hourcomp