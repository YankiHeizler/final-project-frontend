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
  setLanguages(['Hebrew', 'Russian', 'English']);
  }, []);

  return (
    <>
      <HeaderComp />
      <Show />
    </>
  )
}

export default HomePage