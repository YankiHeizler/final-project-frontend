import React, { useState } from 'react'
import Popup from '../../PopupComp/PopupComp'
import Login from '../LoginPage/LoginPageConp';
import { useNavigate, Link} from 'react-router-dom';
import {CREATSTUDENTURL} from '../../../URLS'
import axios from 'axios';

const EnrollmentStudent = () => {

  const data = [
      {name:'studFName',titel:'שם פרטי',type:'txte',required:true ,default:''},
      {name:'studLName',titel:'שם משפחה',type:'txte',required:true ,default:''},
      {name:'studTZ',titel:'מספר זהות',type:'txte',required:true ,default:'',maxlength:9 ,minlength:5},
      {name:'studBirthDate',titel:'תאריך לידה',type:'date',required:true ,default:''},
      {name:'studPhone',titel:'מס טלפון',type:'txte',required:true ,default:''},
      {name:'studEmail',titel:'אימייל',type:'email',required:true,default:''},
      {name:'studPass',titel:'סיסמה',type:'txte',required:true ,default:''}
      
      ]
        
        const [isOpen, setIsOpen] = useState(true);
        const navigate = useNavigate();        
        const togglePopup = () => {
          setIsOpen(!isOpen);
          {
            navigate(-1);
          }
        };
        const login = async ({ data }) => {
          const url = CREATSTUDENTURL
          const userDetails =data
            const res = await axios.post(url, {userDetails} )
            console.log(res.data);
        }
  return (
    <>
    <Popup open={isOpen} closeFn={togglePopup}>
        <Login fields={data} titel={'הרשמה לסטודנט'} func={login}/>
        <Link to={'/lecturer-enrollment'} > יצירת מרצה חדש </Link>

    </Popup>
    </>
  )
}

export default EnrollmentStudent