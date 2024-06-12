// // import React, { useState } from 'react';

// // function PopupComponent() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const togglePopup = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div>
// //       <button onClick={togglePopup}>פתח חלון פופאפ</button>
// //       {isOpen && (
// //         <div style={popupStyles}>
// //           <div style={popupContentStyles}>
// //             <p>זהו החלון הפופאפ</p>
// //             <button onClick={togglePopup}>סגור</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // const popupStyles = {
// //   position: 'fixed',
// //   top: '0',
// //   left: '0',
// //   width: '100%',
// //   height: '100%',
// //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   display: 'flex',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// // };

// // const popupContentStyles = {
// //   backgroundColor: '#fff',
// //   padding: '20px',
// //   borderRadius: '5px',
// // };

// // export default PopupComponent;
// // import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import React, { useState } from 'react';
// const PopupComponent = ({onDateChanged}) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState(null);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleDateChange = (date) => {
//     if(typeof onDateChanged === 'function'){
//       onDateChanged(date);
//     }
//     setSelectedDate(date);
//   };

//   // const popupStyles = {
//   //   position: 'fixed',
//   //   top: '0',
//   //   left: '0',
//   //   width: '100%',
//   //   height: '100%',
//   //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   //   display: 'flex',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   zIndex: '1000', // ensures the popup is above other elements
//   // };

//   // const popupContentStyles = {
//   //   backgroundColor: '#fff',
//   //   padding: '20px',
//   //   borderRadius: '5px',
//   //   width: '90%', // Adjust as needed to fit the desired width
//   //   maxWidth: '400px', // Maximum width for the popup content
//   // };

//   const popupStyles = {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: '1000', // ensures the popup is above other elements
//   };
  
//   const popupContentStyles = {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     width: '90%', // Adjust as needed to fit the desired width
//     maxWidth: '400px', // Maximum width for the popup content
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     border: '1px solid #d4af37', // Subtle gold border
//   };
  
//   const titleStyles = {
//     fontSize: '24px',
//     marginBottom: '10px',
//     color: '#b8860b', // Gold color for the title
//   };
  
//   const textStyles = {
//     fontSize: '16px',
//     color: '#333',
//     marginBottom: '20px',
//   };
  
//   const buttonStyles = {
//     backgroundColor: '#d4af37', // Gold background color for button
//     color: '#fff',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     transition: 'background-color 0.3s',
//   };
  
//   const buttonHoverStyles = {
//     backgroundColor: '#c29523', // Darker gold on hover
//   };
  
//   // Usage in a React component
//   return (
//     <div style={popupStyles}>
//       <div style={popupContentStyles}>
//         <h2 style={titleStyles}>כותרת הפופאפ</h2>
//         <p style={textStyles}>תוכן הפופאפ כאן</p>
//         <button style={buttonStyles} onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor}>לחצן</button>
//       </div>
//     </div>
//   );
  

//   return (
//     <div>
//       <button onClick={togglePopup}>פתח חלון פופאפ</button>
//       {isOpen && (
//         <div style={popupStyles}>
//           <div style={popupContentStyles}>
//             <p>חפש לפי תאריך</p>
//             <DatePicker selected={selectedDate} onChange={handleDateChange} />
//             <button onClick={togglePopup}>סגור</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PopupComponent;
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';

const PopupComponent = ({ onDateChanged }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date) => {
    if (typeof onDateChanged === 'function') {
      onDateChanged(date);
    }
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
    backgroundColor: '#fff8dc', // Light gold background color
    padding: '30px',
    borderRadius: '10px',
    width: '90%', // Adjust as needed to fit the desired width
    maxWidth: '400px', // Maximum width for the popup content
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid #d4af37', // Subtle gold border
    textAlign: 'center', // Center align content
  };

  const titleStyles = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#b8860b', // Gold color for the title
  };

  const textStyles = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '20px',
  };

  const buttonStyles = {
    backgroundColor: '#d4af37', // Gold background color for button
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
    marginTop: '20px', // Add margin to the top for spacing
  };

  const buttonHoverStyles = {
    backgroundColor: '#c29523', // Darker gold on hover
  };

  return (
    <div>
      <button
        style={buttonStyles}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor}
        onClick={togglePopup}
      >
    חיפוש לי תאריך
      </button>
      {isOpen && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <h2 style={titleStyles}>חיפוש לפי תאריך </h2>
            <p style={textStyles}> כאן תוכל לבחור תאריך להצגת לוח הזמנים ולחפש שיעורים  לפי תאריך                 בחר תאריך</p>
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
            <button
              style={buttonStyles}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor}
              onClick={togglePopup}
            >
בחר            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
