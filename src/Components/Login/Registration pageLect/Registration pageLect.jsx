import React, { useState } from 'react'
import Popup from '../../PopupComp/PopupComp'
import Login from '../LoginPage/LoginPageConp';
import { useNavigate} from 'react-router-dom';
import {CREATLECTURERURL} from '../../../URLS'
const EnrollmentStudent = () => {

  const data = [
      {name:'lecFName',titel:'שם פרטי',type:'txte',required:true ,default:''},
      {name:'lecLName',titel:'שם משפחה',type:'txte',required:true ,default:''},
      {name:'lecTZ',titel:'מספר זהות',type:'txte',required:true ,default:'',maxlength:9 ,minlength:5},
      {name:'lecSex',titel:'מגדר',type:'txte',options:["זכר","נקבה"],required:true ,default:'זכר'},
      {name:'lecBirthDate',titel:'תאריך לידה',type:'date',required:true ,default:''},
      {name:'lecStartIntDate',titel:'תאריך התחלת הוראה',type:'date',required:true ,default:''},
      {name:'lecRate',titel:' תעריף לשיעור',type:'number',required:true ,default:''},
      {name:'lecSex',titel:'מגדר',type:'txte',options:["ללא תואר","קורסים","דוֹקטוֹרָט","תואר שני","תואר ראשון ","סטודנט של האוניברסיטה"],required:true ,default:"ללא תואר"},
    //   {name:'studPhone',titel:'מס טלפון',type:'txte',required:true ,default:''},
    //   {name:'studEmail',titel:'אימייל',type:'email',required:true,default:''},
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
          const url = CREATLECTURERURL
            const res = await axios.post(url, data )
            console.log(res.data);
        }
  return (
    <>
    <Popup open={isOpen} closeFn={togglePopup}>
        <Login fields={data} titel={'הרשמה לסטודנט'} func={login}/>
    </Popup>
    </>
  )
}

export default EnrollmentStudent