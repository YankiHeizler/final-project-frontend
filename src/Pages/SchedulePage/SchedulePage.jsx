import React, {useEffect, useState} from 'react'

const SchedulePage = () => {
  const [schudles, setSchudles] = useState([]);

  function handleClick() {

  }
  
  useEffect(()=>{
    setSchudles([
      {date: '11/12/2024', hours: [9,10,11,17,18,19,20]},
      {date: '12/12/2024', hours: [18,19,20]},
      {date: '13/12/2024', hours: [9,10,11,20]},
      {date: '14/12/2024', hours: [9]},
      {date: '15/12/2024', hours: [18,19,20,21,22,23]}
    ]);
    // TODO: fetch schudles list and display to the user.

  },[]);



  return (
    <div>Schedule Page</div>
  )
}

export default SchedulePage

