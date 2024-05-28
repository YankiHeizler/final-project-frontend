import React from 'react'
import './MultipleCompo.css'
const MultipleCompo = ({pra , onChange , name }) => {
  return (
  <>
  {name ? <label>{name}</label>:<p></p>}
  <div className='ex1' name = {pra.name} key={`${pra}${pra.name}`} onChange={onChange} >
    {pra.options.map((opt,index) => (
        <div key={`${pra.name}-${index}`}>
            <input type='checkbox' name={name || pra.name} value={opt} id={`${pra.name}-${index}`} />
                <label htmlFor={`${pra.name}-${index}`}>{opt}</label>
        </div>
        ))}
    </div>
    </>
  )
}

export default MultipleCompo