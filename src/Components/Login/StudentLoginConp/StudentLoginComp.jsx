import React from 'react'
import Popup from '../../PopupComp/PopupComp'
import Login from '../LoginPage/LoginPageConp'
import { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import {LOGINLECTURERURL, LOGINSTUDENTURL} from '../../../URLS.jsx'
const StudentLoginComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {name:'שם',type:'txte'},
    {name:'אימייל',type:'txte'},
    {name:'סיסמה',type:'txte'}
    ]

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
const getUser = async (pro) => {
  let isChecked = false;

  document.addEventListener("DOMContentLoaded", function(event){
    const checkbox = document.querySelector('input[type="checkbox"]');
    isChecked = checkbox.checked;
  })

  let Url = LOGINSTUDENTURL;
  if(isChecked){
    Url = LOGINLECTURERURL;
  }

  const req = await axios.get(`${Url}${pro}`);
  console.log(req.data);
  return req.data;
}

  return (
    <>
    <button onClick={togglePopup}>open</button>
       <Popup open={isOpen} closeFn={togglePopup}>
       <Login fields={data} punct={getUser}/>
       <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" defaultChecked />
        <label> כניסה כסטודנט </label>
      </div>
      <Link to={'/student-enrollment'} > יצירת משתמש חדש </Link>
       </Popup>
    </>
  )
}

export default StudentLoginComp






export const getfunction = async (url,pro) =>{
    const res = await axios.get(`${url}${pro}`)
    console.log(res.data);
    return res.data
}