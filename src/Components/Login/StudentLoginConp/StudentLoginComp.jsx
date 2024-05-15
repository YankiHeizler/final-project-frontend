import React from 'react'
import Popup from '../../PopupComp/PopupComp'
import Login from '../LoginPage/LoginPageConp'
import { useState } from 'react'
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';
import { LOGINLECTURERURL, LOGINSTUDENTURL } from '../../../URLS.js'
const StudentLoginComp = () => {
  const data = [
    { name: 'userName', titel: 'שם', type: 'txte', required: true ,default:'' },
    { name: 'password', titel: 'סיסמה', type: 'txte', required: true ,default:''},
    { name: 'isLecturerurl', titel: 'כניסה למרצה', type: 'checkbox' ,default: false}
  ]

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate
  const togglePopup = () => {
    setIsOpen(!isOpen);
    {
      navigate(-1);
    }
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


  const login = async ({ data }) => {
    const url = data.isLecturerurl ?
      LOGINLECTURERURL :
      LOGINSTUDENTURL

    const { userName, password } = data 

      const res = await axios.post(url, { userName, password })
      console.log(res.data);
      // return response.data;
  }

  return (
    <>
      <button onClick={togglePopup}>LOGIN</button>
      <Popup open={isOpen} closeFn={togglePopup}>
        <Login fields={data} func={login} titel={'כניסה'}/>
        <Link to={'/student-enrollment'} > יצירת משתמש חדש </Link>
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