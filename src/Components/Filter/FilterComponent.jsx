import { useState } from 'react';
import './FilterComponent.css';

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

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>מין:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={gender.male}
              onChange={() => handleCheckboxChange('gender', 'male')}
            />
            גבר
          </label>
          <label>
            <input
              type="checkbox"
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
            <input
              type="checkbox"
              checked={ranks.junior}
              onChange={() => handleCheckboxChange('ranks', 'junior')}
            />
            בסיסית
          </label>
          <label>
            <input
              type="checkbox"
              checked={ranks.mid}
              onChange={() => handleCheckboxChange('ranks', 'mid')}
            />
            ביניים
          </label>
          <label>
            <input
              type="checkbox"
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
            <input
              type="checkbox"
              checked={ageRange.under30}
              onChange={() => handleCheckboxChange('ageRange', 'under30')}
            />
            מתחת ל-30
          </label>
          <label>
            <input
              type="checkbox"
              checked={ageRange.from30to50}
              onChange={() => handleCheckboxChange('ageRange', 'from30to50')}
            />
            בין 30 ל-50
          </label>
          <label>
            <input
              type="checkbox"
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
            <input
              type="checkbox"
              checked={priceRange.under100}
              onChange={() => handleCheckboxChange('priceRange', 'under100')}
            />
            מתחת ל-100
          </label>
          <label>
            <input
              type="checkbox"
              checked={priceRange.from100to150}
              onChange={() => handleCheckboxChange('priceRange', 'from100to150')}
            />
            בין 100 ל-150
          </label>
          <label>
            <input
              type="checkbox"
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
            <input
              type="checkbox"
              checked={learningMethods.whatsapp}
          //     onChange={() => handleCheckboxChange('learningMethods', 'whatsapp')}
          //   />
          //   וואטסאפ
          // </label>
          // <label>
          //   <input
          //     type="checkbox"
          //     checked={learningMethods.telegram}
          //     onChange={() => handleCheckboxChange('learningMethods', 'telegram')}
          //   />
          //   טלגרם
          // </label>
          // <label>
          //   <input
          //     type="checkbox"
          //     checked={learningMethods.zoom}
              onChange={() => handleCheckboxChange('learningMethods', 'zoom')}
            />
            זום
          </label>
          <label>
            <input
              type="checkbox"
              checked={learningMethods.phone}
              onChange={() => handleCheckboxChange('learningMethods', 'phone')}
            />
            טלפון
          </label>
          <label>
            <input
              type="checkbox"
              checked={learningMethods.frontal}
              onChange={() => handleCheckboxChange('learningMethods', 'frontal')}
            />
            פרונטלי
          </label>
          <label>
            <input
              type="checkbox"
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
            <input
              type="checkbox"
              checked={experience.under5}
              onChange={() => handleCheckboxChange('experience', 'under5')}
            />
            מתחת ל-5 שנים
          </label>
          <label>
            <input
              type="checkbox"
              checked={experience.from5to10}
              onChange={() => handleCheckboxChange('experience', 'from5to10')}
            />
            בין 5 ל-10 שנים
          </label>
          <label>
            <input
              type="checkbox"
              checked={experience.over10}
              onChange={() => handleCheckboxChange('experience', 'over10')}
            />
            מעל 10 שנים
          </label>
        </div>
      </div>
      {/* <div className="filter-group">
  <label>רמת השכלה:</label>
  <div>
    <label>
      <input
        type="checkbox"
        checked={educationLevel.undergraduate}
        onChange={() => handleCheckboxChange('educationLevel', 'undergraduate')}
        />
        קורסים
      </label>
      <label>
        <input
          type="checkbox"
          checked={educationLevel.graduate}
        onChange={() => handleCheckboxChange('educationLevel', 'undergraduate')}
      />
      סטודנט של האוניברסיטה
    </label>
    <label>
      <input
        type="checkbox"
        checked={educationLevel.graduate}
        onChange={() => handleCheckboxChange('educationLevel', 'graduate')}
      />
      תואר ראשון
    </label>
    <label>
      <input
        type="checkbox"
        checked={educationLevel.postGraduate}
        onChange={() => handleCheckboxChange('educationLevel', 'postGraduate')}
      />
      תואר שני
    </label>
    <label>
      <input
        type="checkbox"
        checked={educationLevel.doctoral}
        onChange={() => handleCheckboxChange('educationLevel', 'doctoral')}
      />
      דוקטורט
    </label>
  </div>
</div>

<div className="filter-group">
  <label>שפת האם:</label>
  <div>
    <label>
      <input
        type="checkbox"
        checked={nativeLanguage.hebrew}
        onChange={() => handleCheckboxChange('nativeLanguage', 'hebrew')}
      />
      עברית
    </label>
    <label>
      <input
        type="checkbox"
        checked={nativeLanguage.english}
        onChange={() => handleCheckboxChange('nativeLanguage', 'russian')}
      />
      רוסית
    </label>
    <label>
      <input
        type="checkbox"
        checked={nativeLanguage.english}
        onChange={() => handleCheckboxChange('nativeLanguage', 'somali')}
      />
      סומלית
    </label>
    <label>
      <input
        type="checkbox"
        checked={nativeLanguage.english}
        onChange={() => handleCheckboxChange('nativeLanguage', 'swedish')}
      />
      שוודית
    </label>
    <label>
      <input
        type="checkbox"
        checked={nativeLanguage.english}
        onChange={() => handleCheckboxChange('nativeLanguage', 'chinese')}
      />
      סינית
    </label>
    <label>
      <input
        type="checkbox"
        checked={nativeLanguage.english}
        onChange={() => handleCheckboxChange('nativeLanguage', 'english')}
      />
      אנגלית
    </label> */}
    {/* </div>
</div> */}
      <button onClick={handleFilterChange}>סנן</button>
    </div>
  );
};

export default FilterComponent;



