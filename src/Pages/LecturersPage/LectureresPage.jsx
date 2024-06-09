import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import HeaderComp from '../../Components/Header/HeaderComp';
import FilterComponent from '../../Components/Filter/FilterComponent';
import './LecturersePage.css';
import LecturerList from '../../Components/LecturerList/LecturerList';

const LecturersByLanguage = () => {
  const { language } = useParams();
  const [lecturers, setLecturers] = useState([]);
  const [filteredLecturers, setFilteredLecturers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        // כדאי לייבא את הכתובת מהקובץ URLS
        const response = await axios.get(`http://localhost:3008/api/lectors?lecLangs=${language}`);
        const fetchedLecturers = response.data.lectors || [];
        setLecturers(fetchedLecturers);
        setFilteredLecturers(fetchedLecturers);
        setError(null);
      } catch (err) {
        console.error('Error fetching lecturers:', err);
        setError(err.message);
      }
    };

    fetchLecturers();
  }, [language]);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const calculateExperience = (startDate) => {
    const today = new Date();
    const startDateObj = new Date(startDate);
    let experience = today.getFullYear() - startDateObj.getFullYear();
    const monthDifference = today.getMonth() - startDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < startDateObj.getDate())) {
      experience--;
    }
    return experience;
  };

  const handleFilter = (filters) => {
    const { gender, ranks, ageRange, priceRange, learningMethods, experience, educationLevel, nativeLanguage } = filters;
    const filtered = lecturers.filter((lecturer) => {
      const genderValid = 
        (!gender.male && !gender.female) ||
        (gender.male && lecturer.lecSex === 'זכר') ||
        (gender.female && lecturer.lecSex === 'נקבה');

      const ranksValid = 
        (!ranks.junior && !ranks.mid && !ranks.senior) || 
        (ranks.junior && lecturer.lecStudyLevels.includes('בסיסית')) || 
        (ranks.mid && lecturer.lecStudyLevels.includes('ביניים')) || 
        (ranks.senior && lecturer.lecStudyLevels.includes('מתקדמת'));

      const age = calculateAge(lecturer.lecBirthDate);
      const ageValid = 
        (!ageRange.under30 && !ageRange.from30to50 && !ageRange.over50) ||
        (ageRange.under30 && age < 30) ||
        (ageRange.from30to50 && age >= 30 && age <= 50) ||
        (ageRange.over50 && age > 50);

      const priceValid = 
        (!priceRange.under100 && !priceRange.from100to150 && !priceRange.over150) ||
        (priceRange.under100 && lecturer.lecRate < 100) ||
        (priceRange.from100to150 && lecturer.lecRate >= 100 && lecturer.lecRate <= 150) ||
        (priceRange.over150 && lecturer.lecRate > 150);

      const learningMethodsValid =
        (!learningMethods.whatsapp && !learningMethods.telegram && !learningMethods.zoom &&
        !learningMethods.phone && !learningMethods.frontal && !learningMethods.other) ||
        (learningMethods.whatsapp && lecturer.lecWaysStudy.includes('וואטסאפ')) ||
        (learningMethods.telegram && lecturer.lecWaysStudy.includes('טלגרם')) ||
        (learningMethods.zoom && lecturer.lecWaysStudy.includes('זום')) ||
        (learningMethods.phone && lecturer.lecWaysStudy.includes('טלפון')) ||
        (learningMethods.frontal && lecturer.lecWaysStudy.includes('פרונטלי')) ||
        (learningMethods.other && lecturer.lecWaysStudy.includes('אחרת'));

      const experienceYears = calculateExperience(lecturer.lecStartIntDate);
      const experienceValid = 
        (!experience.under5 && !experience.from5to10 && !experience.over10) ||
        (experience.under5 && experienceYears < 5) ||
        (experience.from5to10 && experienceYears >= 5 && experienceYears <= 10) ||
        (experience.over10 && experienceYears > 10);

      const educationLevelValid =
        (!educationLevel.undergraduate && !educationLevel.graduate && !educationLevel.postGraduate && !educationLevel.doctoral) ||
        (educationLevel.undergraduate && lecturer.lecEduc.includes('קורסים')) ||
        (educationLevel.undergraduate && lecturer.lecEduc.includes('סטודנט של האוניברסיטה')) ||
        (educationLevel.graduate && lecturer.lecEduc.includes('תואר ראשון') )||
        (educationLevel.postGraduate && lecturer.lecEduc.includes('תואר שני')) ||
        (educationLevel.doctoral && lecturer.lecEduc.includes('דוקטורט'));

      const nativeLanguageValid =
        (!nativeLanguage.hebrew && !nativeLanguage.english && !nativeLanguage.russian && !nativeLanguage.somali && !nativeLanguage.swedish && !nativeLanguage.chinese) ||
        (nativeLanguage.hebrew && lecturer.lecMotherLang === 'עברית') ||
        (nativeLanguage.russian && lecturer.lecMotherLang === 'רוסית') ||
        (nativeLanguage.somali && lecturer.lecMotherLang === 'סומלית') ||
        (nativeLanguage.swedish && lecturer.lecMotherLang === 'שוודית') ||
        (nativeLanguage.chinese && lecturer.lecMotherLang === 'סינית') ||
        (nativeLanguage.english && lecturer.lecMotherLang === 'אנגלית');
  
      return genderValid && ranksValid && ageValid && priceValid && learningMethodsValid && experienceValid && educationLevelValid && nativeLanguageValid;
    });
    setFilteredLecturers(filtered);
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!lecturers.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderComp />
      <div className="main-container">
        <FilterComponent onFilter={handleFilter} />
        <LecturerList products={filteredLecturers} />
      </div>
    </div>
  );
};

export default LecturersByLanguage;