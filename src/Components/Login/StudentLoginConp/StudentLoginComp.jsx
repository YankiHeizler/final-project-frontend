import React from 'react'
import Popup from '../../PopupComp/PopupComp'
import Login from '../LoginPage/LoginPageConp'
import { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { LOGINLECTURERURL, LOGINSTUDENTURL } from '../../../URLS.js'
const StudentLoginComp = () => {
  const data = [
    { name: 'Email', titel: 'מייל', type: 'txte', required: true, default: '' },
    { name: 'Pass', titel: 'סיסמה', type: 'txte', required: true, default: '' },
    { name: 'isLecturerurl', titel: 'כניסה למרצה', type: 'checkbox', default: false }
  ]

  const navigate = useNavigate();
  const togglePopup = () => {
      navigate(-1);
  };

  const login = async (data) => {
    const { Pass, Email, isLecturerurl } = data;
    const url = isLecturerurl ? LOGINLECTURERURL : LOGINSTUDENTURL;
    let userDetails;
    if (isLecturerurl) {
      const lecPass = Pass;
      const lecEmail = Email;
      userDetails = { lecPass, lecEmail };
    } else {
      const studPass = Pass;
      const studEmail = Email;
      userDetails = { studPass, studEmail };
    }
    const res = await axios.post(url, { userDetails }, { withCredentials: true })
    return (res)
    }

  return (
    <>
      <Popup open={true} closeFn={togglePopup}>
        <Login fields={data} func={login} titel={'כניסה'} />
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          <br/>
          <Link style={{color:"purple",fontSize:"18px"}} to={'/student-enrollment'} >סטודנט חדש? הרשם</Link>
          <br />
          <Link style={{color:"purple",fontSize:"18px"}} to={'/lecturer-enrollment'} >מרצה חדש? הרשם</Link>
        </div>
      </Popup>
    </>
  )
}

export default StudentLoginComp






// export const getfunction = async (url, pro) => {
//   const res = await axios.get(`${url}${pro}`)
//   console.log(res.data);
//   return res.data
// }