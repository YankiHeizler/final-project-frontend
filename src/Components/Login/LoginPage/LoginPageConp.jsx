import React, { useState } from 'react';
import './LoginPageStyile.css'
import MultipleCompo from '../../MultipleCompo/MultipleCompo';

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
    console.log(checked);
    setData(newData);
    console.log(newData);
  };

  const multipleOnChange = (event) => {
    const { name, value, checked } = event.target
    // console.log(event);
    // console.log(name);
    // console.log(value);
    // console.log(checked);
    // console.log('xxxxxxxxxxxxxxxxxx');
    const newData = { ...data };
    // const [selectedOptions, setSelectedOptions] = useState([]);
    if (checked) {
      newData[name] = [...newData[name], value];
    }
    else {
      newData[name] = newData[name].filter((opt) => opt !== value);
    }
    setData(newData);
    console.log(newData);


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
    // const [selectedOptions, setSelectedOptions] = useState([]);
    
    // if(!newData.lecTimeTable.name){
    //   newData.lecTimeTable[name] = []
    // }
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
    console.log(data);
    // console.log(newData.lecTimeTable);


  }

  const Submit = async (e) => {
    e.preventDefault()
    try {
      // console.log(data);
     const res = await func(data)
      saveToken(res.data.token);
      // console.log(getToken());
      console.log(res.data);
      setError('')

    } catch (error) {
      setError(error.message)
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
                      (<input id={`${pra.name}-${index}`} name={pra.name} type={pra.type} required={pra.required} onChange={handleChange} />
                      )}
                    </div>


                  )}
              <input type="submit" />
            </form>
        { error && <div>error:{error}</div>}

      </div>

    </>
  );
}
export default Login;

// <div className='ex1' name = {pra.name}  onChange={multipleOnChange} >
//   {pra.options.map((opt) => (
//     <div key={opt}>
//     <input type='checkbox' name={pra.name} value={opt} id={opt} />
//     <label htmlFor={opt}>{opt}</label>
//   </div>
//   ))}
// </div>