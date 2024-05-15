import React, { useState } from 'react';
import './LoginPageStyile.css'


function Login({ fields, func , titel }) {

  const tetKeys = (field) => {
    const keys = {}
    field.map((f) => {
      keys[f.name] = f.default
    })
    return keys
  }

  const [data, setData] = useState(tetKeys(fields));
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const newData = { ...data };
    (type == 'text') ?

      newData[name] = value : newData[name] = checked

    setData(newData);
    console.log(newData);
  };

  const Submit = async (e) => {
    e.preventDefault()
    try {
      await func(data)
    } catch (error) {
      setError(error.message)
    }
    e.reset()
  }



  return (
    <>
      <div className="login-modal">
        <h2> {titel }</h2>
        <form onSubmit={e => Submit(e)} onChange={handleChange}>
          {fields.map((pra) =>
            <div key={pra.name}>
              <p>
                {pra.required ? (
                  <label>* {pra.titel}</label>
                ) : <label>{pra.titel}</label>}
              </p>
              {pra.options ? (
                <select name={pra.name} >
                  {pra.options.map((opt) => (
                    <option key={opt} value={opt} id={opt}>{opt}</option>
                  ))}
                </select>
              ) :
                (<input name={pra.name} type={pra.type} required={pra.required} />
                )}
            </div>


          )}
          <input type="submit" />
        </form>
        {error && <div>{error}</div>}

      </div>

    </>
  );
}
export default Login;