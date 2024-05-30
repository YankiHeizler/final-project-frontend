import React, { useState, useEffect } from 'react'
import HeaderComp from '../../Components/Header/HeaderComp'

import { useNavigate } from "react-router-dom";

import Show from '../../Components/Langugase/Langugase'



const HomePage = () => {
  const [language, setLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
  const navigation = useNavigate();

  async function handleClick() {

    navigation('/lecturers')
  }

  useEffect(() => {
    // fetch langauges list
    setLanguages(['Hebrew', 'Russian', 'English']);
    /* 
    TODO: change to API data
    fetch('URL')
     .then(res=>res.json())
     .then(json=>setLanguages(json))
     */

  }, []);

  return (
    <>
      <HeaderComp />
      <Show />


      {/* <HeaderComp />
      <div id="select-lang">
        <div className="langs">

          {languages.map(lang => (
            <div
              key={lang}
              onClick={() => setLanguage(lang)} className={"lang " + (language == lang ? 'selected' : '')} >{lang}</div>
          ))}

        </div>

        {language !== '' && <button className="lang-selector" onClick={handleClick}>Select</button>}
      </div> */}


    </>

  )
}

export default HomePage