import React, { useState } from 'react'
import Popup from '../../PopupComp/PopupComp'
import Login from '../LoginPage/LoginPageConp';
import { Link, useNavigate } from 'react-router-dom';
import { CREATLECTURERURL } from '../../../URLS'
import axios from 'axios';
const RegistrationPageLect = () => {

  const data = [
    { name: 'lecFName', titel: 'שם פרטי', type: 'text', required: true, default: '' },
    { name: 'lecLName', titel: 'שם משפחה', type: 'text', required: true, default: '' },
    { name: 'lecTimeTable', titel: 'ימי לימוד', type: 'text', deys: [1, 2, 3, 4, 5], options: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'], required: true, default: [{"day":1, "workinghours":[]},{"day":2, "workinghours":[]},{"day":3, "workinghours":[]},{"day":4, "workinghours":[]},{"day":5, "workinghours":[]}], multiple: true },
    { name: 'lecTZ', titel: 'מספר זהות', type: 'text', required: true, default: '', maxlength: 9, minlength: 5 },
    { name: 'lecSex', titel: 'מגדר', type: 'select', options: ["זכר", "נקבה"], required: true, default: 'זכר', multiple: false },
    { name: 'lecStudyLevels', titel: 'רמת לימוד ', type: 'text', options: ['בסיסית', 'ביניים', 'מתקדמת'], required: true, default: [], multiple: true },
    { name: 'lecBirthDate', titel: 'תאריך לידה', type: 'date', required: true, default: '' },
    { name: 'lecStartIntDate', titel: 'תאריך התחלת הוראה', type: 'date', required: true, default: '' },
    { name: 'lecRate', titel: ' תעריף לשיעור', type: 'number', required: true, default: '' },
    { name: 'lecEduc', titel: 'השכלה', type: 'text', options: ["ללא תואר", "קורסים", "דוֹקטוֹרָט", "תואר שני", "תואר ראשון ", "סטודנט של האוניברסיטה"], required: true, default: [], multiple: true },
    { name: 'lecLangs', titel: 'שפות', type: 'text', options: ["אנגלית", "עברית", "רוסית", "סינית", "סומלית", "שוודית"], required: true, default: [], multiple: true },
    { name: 'lecWaysStudy', titel: 'דרך הלימוד ', type: 'text', options: ['וואטסאפ', 'טלגרם', 'זום', 'טלפון', 'פרונטלי', 'אחרת'], required: true, default: [], multiple: true },
    { name: 'lecMotherLang', titel: 'שפת אם ', type: 'select', options: ["עברית", "אנגלית", "רוסית", "סינית", "סומלית", "שוודית"], required: true, default: "עברית", multiple: false },
    { name: 'lecPhone', titel: 'מס טלפון', type: 'text', required: true, default: '' },
    { name: 'lecEmail', titel: 'אימייל', type: 'email', required: true, default: '' },
    { name: 'lecPass', titel: 'סיסמה', type: 'text', required: true, default: '' }


  ]

  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const togglePopup = () => {
    setIsOpen(!isOpen);
    {
      navigate(-1);
    }
  };
  const login = async (data ) => {
    const url = CREATLECTURERURL
    const userDetails = data
    const res = await axios.post(url, { userDetails })
    console.log(res.data);
  }
  return (
    <>
      <Popup open={isOpen} closeFn={togglePopup}>
        <Login fields={data} titel={'הרשמה למרצה'} func={login} />
      </Popup>
    </>
  )
}

export default RegistrationPageLect