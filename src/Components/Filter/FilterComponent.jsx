import { useState } from 'react';
import './FilterComponent.css';
import { Button, Checkbox, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Fade from '@mui/material/Fade';

const FilterComponent = ({ onFilter }) => {
  const [gender, setGender] = useState({ male: false, female: false });
  const [ranks, setRanks] = useState({
    junior: false,
    mid: false,
    senior: false,
  });
  const [ageRange, setAgeRange] = useState({
    under30: false,
    from30to50: false,
    over50: false,
  });
  const [priceRange, setPriceRange] = useState({
    under100: false,
    from100to150: false,
    over150: false,
  });
  const [learningMethods, setLearningMethods] = useState({
    whatsapp: false,
    telegram: false,
    zoom: false,
    phone: false,
    frontal: false,
    other: false,
  });
  const [experience, setExperience] = useState({
    under5: false,
    from5to10: false,
    over10: false,
  });
  const [educationLevel, setEducationLevel] = useState({
    undergraduate: false,
    graduate: false,
    postGraduate: false,
    doctoral: false,
  });

  const [nativeLanguage, setNativeLanguage] = useState({
    hebrew: false,

    english: false,

    // Add more languages if needed
  });

  const handleCheckboxChange = (category, key) => {
    if (category === 'gender') {
      setGender({ ...gender, [key]: !gender[key] });
    } else if (category === 'ranks') {
      setRanks({ ...ranks, [key]: !ranks[key] });
    } else if (category === 'ageRange') {
      setAgeRange({ ...ageRange, [key]: !ageRange[key] });
    } else if (category === 'priceRange') {
      setPriceRange({ ...priceRange, [key]: !priceRange[key] });
    } else if (category === 'learningMethods') {
      setLearningMethods({ ...learningMethods, [key]: !learningMethods[key] });
    } else if (category === 'experience') {
      setExperience({ ...experience, [key]: !experience[key] });
    } else if (category === 'educationLevel') {
      setEducationLevel({ ...educationLevel, [key]: !educationLevel[key] });
    } else if (category === 'nativeLanguage') {
      setNativeLanguage({ ...nativeLanguage, [key]: !nativeLanguage[key] });
    }
  };

  const handleFilterChange = () => {
    onFilter({ gender, ranks, ageRange, priceRange, learningMethods, experience, educationLevel, nativeLanguage });
  };

  const [isExpanded,setIsExpanded]=useState(false);
  return (
      <>
      {isExpanded == false ?
        <Button variant="outlined" onClick={()=> setIsExpanded(true)}><ExpandMoreIcon />הצג סינון</Button>
      : <Button variant="outlined" onClick={()=> setIsExpanded(false)}><ExpandLessIcon />הסתר סינון</Button>}
    <Fade in={isExpanded}>
    <Paper sx={{ m: 1, width: "100%",height : isExpanded ? '100%':'0px' }} elevation={4}>
    <div className="filter-container">

      <div className="filter-group">
        <label>מין:</label>
        <div>
          <label>
          <Checkbox
              checked={gender.male}
              onChange={() => handleCheckboxChange('gender', 'male')}
            />
            גבר
          </label>
          <label>
            <Checkbox
              checked={gender.female}
              onChange={() => handleCheckboxChange('gender', 'female')}
            />
            אשה
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label> רמת הלימוד:</label>
        <div>
          <label>
            <Checkbox
              checked={ranks.junior}
              onChange={() => handleCheckboxChange('ranks', 'junior')}
            />
            בסיסית
          </label>
          <label>
            <Checkbox
              checked={ranks.mid}
              onChange={() => handleCheckboxChange('ranks', 'mid')}
            />
            ביניים
          </label>
          <label>
            <Checkbox
              checked={ranks.senior}
              onChange={() => handleCheckboxChange('ranks', 'senior')}
            />
            מתקדמת
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label> גיל: </label>
        <div>
          <label>
            <Checkbox
              checked={ageRange.under30}
              onChange={() => handleCheckboxChange('ageRange', 'under30')}
            />
            מתחת ל-30
          </label>
          <label>
            <Checkbox
              checked={ageRange.from30to50}
              onChange={() => handleCheckboxChange('ageRange', 'from30to50')}
            />
            בין 30 ל-50
          </label>
          <label>
            <Checkbox
              checked={ageRange.over50}
              onChange={() => handleCheckboxChange('ageRange', 'over50')}
            />
            מעל 50
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label> תעריף לשיעור:</label>
        <div>
          <label>
            <Checkbox
              checked={priceRange.under100}
              onChange={() => handleCheckboxChange('priceRange', 'under100')}
            />
            מתחת ל-100
          </label>
          <label>
            <Checkbox
              checked={priceRange.from100to150}
              onChange={() => handleCheckboxChange('priceRange', 'from100to150')}
            />
            בין 100 ל-150
          </label>
          <label>
            <Checkbox
              checked={priceRange.over150}
              onChange={() => handleCheckboxChange('priceRange', 'over150')}
            />
            מעל 150
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label>צורת הלמידה:</label>
        <div>
          <label>
            <Checkbox
              checked={learningMethods.whatsapp}
              onChange={() => handleCheckboxChange('learningMethods', 'zoom')}
            />
            זום
          </label>
          <label>
            <Checkbox
              checked={learningMethods.phone}
              onChange={() => handleCheckboxChange('learningMethods', 'phone')}
            />
            טלפון
          </label>
          <label>
            <Checkbox
              checked={learningMethods.frontal}
              onChange={() => handleCheckboxChange('learningMethods', 'frontal')}
            />
            פרונטלי
          </label>
          <label>
            <Checkbox
              checked={learningMethods.other}
              onChange={() => handleCheckboxChange('learningMethods', 'other')}
            />
            אחרת
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label>וותק בהוראה:</label>
        <div>
          <label>
            <Checkbox
              checked={experience.under5}
              onChange={() => handleCheckboxChange('experience', 'under5')}
            />
            מתחת ל-5 שנים
          </label>
          <label>
            <Checkbox
              checked={experience.from5to10}
              onChange={() => handleCheckboxChange('experience', 'from5to10')}
            />
            בין 5 ל-10 שנים
          </label>
          <label>
            <Checkbox
              checked={experience.over10}
              onChange={() => handleCheckboxChange('experience', 'over10')}
            />
            מעל 10 שנים
          </label>
        </div>
      </div>

  );
};

export default FilterComponent;



