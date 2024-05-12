import React, { useState } from 'react';
import './LoginPageStyile.css'
function Login({ fields , punct}) {
    const [data, setData] = useState({});
    
    
    const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
    };
  
    
    
  
    return (
        <>
        <div className="login-modal">
        <h2> כניסה </h2>
        {fields.map((pra) => 
        // <input type={pra.type} name={pra.name}
        // placeholder = {pra.name}
        // onChange={handleChange}
        // />
        <div key={pra.id}>
          <p>{pra.name}</p>
          {pra.options ? (
            <select>
              {pra.options.map((opt )=> (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input type="text" />
          )}
        </div>
        )}
        <button onClick={punct}> אישור </button>
        
        
      </div>
      </>
    );
  }
  
  export default Login;