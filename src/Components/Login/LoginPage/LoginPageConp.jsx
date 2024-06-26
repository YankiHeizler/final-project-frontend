import React, { useState } from 'react';
import './LoginPageStyile.css'
import MultipleCompo from '../../MultipleCompo/MultipleCompo';
import { Button, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login({ fields, func, titel }) {

  const tetKeys = (field) => {
    const keys = {}
    field.map((f) => {
      keys[f.name] = f.default
    })
    return keys
  }
  const saveToken = (token)=>{
    localStorage.setItem('Token', token)
  };
  const [data, setData] = useState(tetKeys(fields));
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    // console.log(name);
    // console.log(type);
    // console.log(value);
    const newData = { ...data };
    (type && type == 'checkbox') ?

      newData[name] = checked : newData[name] = value
    // console.log(checked);
    setData(newData);
    // console.log(newData);
  };

  const multipleOnChange = (event) => {
    const { name, value, checked } = event.target
    // console.log(event);
    // console.log(name);
    // console.log(value);
    // console.log(checked);
    // console.log('xxxxxxxxxxxxxxxxxx');
    const newData = { ...data };
    if (checked) {
      newData[name] = [...newData[name], value];
    }
    else {
      newData[name] = newData[name].filter((opt) => opt !== value);
    }
    setData(newData);
    // console.log(newData);


  }
  const updateFormData = (event) => {
    const { name, value, checked } = event.target
    // console.log(event);
    // console.log(`name:${name}`);
    // console.log(value);
    // console.log(checked);
    // console.log('xxxxxxxxxxxxxxxxxx');
    const newData = { ...data };
    // console.log(newData);
    const theDay = newData.lecTimeTable.find((day) => day.day == name);
    // console.log(newData.lecTimeTable);    
    if (! theDay) {
      console.error(`Day ${name} not found`);
      return;
    }
    if (checked) {
      theDay.workinghours.push(value);
    }
    else {
      theDay.workinghours = theDay.workinghours.filter((opt) => opt !== value);
    }
    setData(newData);
    // console.log(data);
    // console.log(newData.lecTimeTable);


  }

  let navigate = useNavigate(); 


  const Submit = async (e) => {
    e.preventDefault()
    try {
     let res = await func(data);
      saveToken(res.data.token);
      setError('')
      const isCreateToLectoreConnectore = localStorage.getItem('isNavigateToCreateLectorConnection');
      if(isCreateToLectoreConnectore == 'true')
        {
          const dataToServer = {
            "userDetails":{
                "lecID": localStorage.getItem('lecturerId'),
                "connLang": localStorage.getItem('lang'),
                "connLessons": [],
                "connBooks": [""]
            }
            
          };
          
        const res = await axios.post('http://localhost:3008/api/connectionStudLec',dataToServer,{withCredentials:true});
        } 
        if (data ["isLecturerurl"] == true)
          navigate('/schedulerLec');
        else
//         sragaLecPage
          navigate('/studentarea')


      
    } catch (error) {
      console.log(error.response.status)
      setError(error)
      if(error.code == "ERR_BAD_REQUEST")
        {
          localStorage.setItem('isNavigateToCreateLectorConnection', 'true');
          localStorage.setItem('lecturerId', lecturerId);
          routeChange('/login');
        }
        else if(error.response.data.message == "connectionStudLec already in the database")
          {
            navigate('/studentarea');
          }
    }
    e.target.reset()
  }
  
  return (
    <>
      <div className="login-modal">
        <h2> {titel}</h2>
        <form onSubmit={Submit} >
          {fields.map((pra,index) =>
            <div key={pra.name}>
              <p>
                {pra.required ? (
                  <label><span className="asterisk">*</span> {pra.titel}</label>
                ) : <label>{pra.titel}</label>}
              </p>
              {
                pra.deys ?
                  (
                    <div className='deys'>
                    {pra.deys.map((d) => (
                      <MultipleCompo key={d} pra={pra} onChange={updateFormData} name={d}/>
                      ))}
                      </div>

                      )
                      : pra.multiple ?
                      (
                      <MultipleCompo pra={pra} onChange={multipleOnChange} />
                      )
                      : pra.options ? (
                      <select  id={`${pra.name}-${index}`} name={pra.name} multiple={pra.multiple} onChange={handleChange} >
                        {pra.options.map((opt) => (
                          <option key={opt} value={opt} id={opt}>{opt}</option>
                        ))}
                      </select>
                      ) :
                      pra.type=="checkbox" ?
                      (<Checkbox id={`${pra.name}-${index}`} name={pra.name} required={pra.required} onChange={handleChange} />) 
                      :
                      (<TextField fullWidth label={pra.titel} variant="outlined" id={`${pra.name}-${index}`} name={pra.name} type={pra.type} required={pra.required} onChange={handleChange} autoComplete ="off" />
                      )}
                    </div>


                  )}
                  <br/>
              <Button variant="contained" type="submit">שלח</Button>
            </form>
            {error && (error.response.status === 500 ? <div className="error-message">
      <p>המשתמש לא נמצא במערכת.</p>
      <p>במידה והינך משתמש רשום, בדוק את הפרטים שלך והקפד לסמן אם הינך מרצה במקום המתאים.</p>
      <p>במידה ואינך רשום, צור משתמש חדש .</p>
    </div> : <div>300</div>)}

      </div>

    </>
  );
}
export default Login;
