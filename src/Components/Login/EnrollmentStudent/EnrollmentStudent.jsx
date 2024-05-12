import React, { useState } from 'react'
import Popup from '../../PopupComp/PopupComp'
import Login from '../LoginPage/LoginPageConp';

const EnrollmentStudent = () => {
    const data = [
        {name:'שם',type:'txte'},
        {name:'אימייל',type:'txte'},
        {name:'סיסמה',type:'txte'},
        {name:'מגדר',type:'txte',option:["זכר","נקבה"]}
        ]
    
        const [isOpen, setIsOpen] = useState(false);
        const togglePopup = () => {
            setIsOpen(!isOpen);
    }

  return (
    <>
    <button onClick={togglePopup}>open</button>
    <Popup open={isOpen} closeFn={togglePopup}>
        <Login fields={data}/>
    </Popup>
    </>
  )
}

export default EnrollmentStudent