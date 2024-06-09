// import React, { useState } from 'react';

// function PopupComponent() {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={togglePopup}>פתח חלון פופאפ</button>
//       {isOpen && (
//         <div style={popupStyles}>
//           <div style={popupContentStyles}>
//             <p>זהו החלון הפופאפ</p>
//             <button onClick={togglePopup}>סגור</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const popupStyles = {
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const popupContentStyles = {
//   backgroundColor: '#fff',
//   padding: '20px',
//   borderRadius: '5px',
// };

// export default PopupComponent;
// import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
const PopupComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const popupStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000', // ensures the popup is above other elements
  };

  const popupContentStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '90%', // Adjust as needed to fit the desired width
    maxWidth: '400px', // Maximum width for the popup content
  };

  return (
    <div>
      <button onClick={togglePopup}>פתח חלון פופאפ</button>
      {isOpen && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <p>חפש לפי תאריך</p>
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
            <button onClick={togglePopup}>סגור</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
