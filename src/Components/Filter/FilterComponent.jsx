import React, { useState } from 'react';
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

  const handleCheckboxChange = (category, key) => {
    if (category === 'gender') {
      setGender({ ...gender, [key]: !gender[key] });
    } else if (category === 'ranks') {
      setRanks({ ...ranks, [key]: !ranks[key] });
    } else if (category === 'ageRange') {
      setAgeRange({ ...ageRange, [key]: !ageRange[key] });
    } else if (category === 'priceRange') {
      setPriceRange({ ...priceRange, [key]: !priceRange[key] });
    }
  };

  const handleFilterChange = () => {
    onFilter({ gender, ranks, ageRange, priceRange });
  };

  return (
    <div className="filter-container">
      <h3>סינון מרצים</h3>
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
      <button onClick={handleFilterChange}>סנן</button>
    </div>
  );
};

export default FilterComponent;



