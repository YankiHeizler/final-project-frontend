import Hourcomp from "../hourcomp/hourcomp"
import hour from "../hourcomp/hour"
const Daycomp = ({day}) => {
  return (
    <div>
      <Hourcomp/>
      {day}
      {hours?.map(hour=>(
        <Hourcomp key={hour} hour={hour}/>
      ))}
      <div></div>
    </div>
  )
}

// export default Daycomp


const DayComp = ({ day, lecturerSchedule, scheduledClasses, lecturerId, studentClasses, studentId }) => {
  const hoursOfDay = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00'
  ];

  return (
    <div className="day">
      <h2>{day}</h2>
      {hoursOfDay.map((hour) => (
        <HourComp
          key={hour}
          hour={hour}
          day={day}
          lecturerSchedule={lecturerSchedule}
          scheduledClasses={scheduledClasses}
          lecturerId={lecturerId}
          studentClasses={studentClasses}
          studentId={studentId}
        />
      ))}
    </div>
  );
};

export default DayComp;