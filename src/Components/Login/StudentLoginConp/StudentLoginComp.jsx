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

  // const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  
  const togglePopup = () => {
    // setIsOpen(!isOpen);
    {
      navigate(-1);
    }
  };
  const saveToken = (token) => {
    localStorage.setItem('fToken', token);
  };
  const getToken = () => {
    return localStorage.getItem('fToken');
  };


  //   const getUser = async (pro) =>{
  //     document.addEventListener("DOMContentLoaded", function(event){
  //       const checkbox = document.querySelector('input[type="checkbox"]');
  //       const isChecked = checkbox.checked;
  //     })
  //     const Url = LOGINSTUDENTURL
  //     if(isChecked){
  //       Url = LOGINLECTURERURL
  //     }
  //     const req = await axios.get(`${Url}${pro}`)
  //     console.log(req.data);
  //     return req.data
  // }


  const login = async (data) => {
    // console.log(data);

    const { Pass, Email, isLecturerurl } = data;
    const url = isLecturerurl ? LOGINLECTURERURL : LOGINSTUDENTURL;
    console.log(url);

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


    // console.log(userDetails );
    const res = await axios.post(url, { userDetails }, { withCredentials: true })
    return (res)
    console.log(res.data);
  }

  return (
    <>
      {/* <button onClick={togglePopup}>LOGIN</button> */}
      <Popup open={true} closeFn={togglePopup}>
        <Login fields={data} func={login} titel={'כניסה'} />
        <div>
          <Link to={'/student-enrollment'} > יצירת סטודנט חדש </Link>
          <br />
          <Link to={'/lecturer-enrollment'} > יצירת מרצה חדש </Link>
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