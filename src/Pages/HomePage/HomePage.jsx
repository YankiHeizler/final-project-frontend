import React, { useState, useEffect } from 'react'
import HeaderComp from '../../Components/Header/HeaderComp'
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import Show from '../../Components/Langugase/Langugase'
>>>>>>> 62495eaf098bdef8cdac919a35105d662840ce52


const HomePage = () => {
  const [language, setLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
const navigation = useNavigate();

  async function handleClick() {
  
  navigation('/lecturers')
  }

  useEffect(()=>{
    // fetch langauges list
    setLanguages(['Hebrew', 'Russian', 'English']);
    /* 
    TODO: change to API data
    fetch('URL')
     .then(res=>res.json())
     .then(json=>setLanguages(json))
     */

  },[]);

  return (
    <>
<<<<<<< HEAD
      <HeaderComp />
      <div id="select-lang">
        <div className="langs">

          {languages.map(lang => (
            <div 
            key={lang}
            onClick={() => setLanguage(lang)} className={"lang " + (language == lang ? 'selected' : '')} >{lang}</div>
          ))}

        </div>

        {language !== '' && <button className="lang-selector" onClick={handleClick}>Select</button>}
      </div>
=======
    <HeaderComp/>
    <Show/>

>>>>>>> 62495eaf098bdef8cdac919a35105d662840ce52
    </>

  )
}

export default HomePage