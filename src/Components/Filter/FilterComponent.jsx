// import React, { useState, useEffect } from 'react';

// const LecturerFilter = ({ lecturers, onFilterChange }) => {
//   const [genderFilter, setGenderFilter] = useState([]);
//   const [knowledgeLevelFilter, setKnowledgeLevelFilter] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
// //   const [filteredLecturers, setFilteredLecturers] = useState([]); 

//   useEffect(() => {
//     if (onFilterChange) {
//       onFilterChange(filteredLecturers);
//     }
//   }, [filteredLecturers, onFilterChange]);

//   const handleGenderFilterChange = (event) => {
//     const selectedGender = event.target.value;
//     if (event.target.checked) {
//       setGenderFilter([...genderFilter, selectedGender]);
//     } else {
//       setGenderFilter(genderFilter.filter((g) => g !== selectedGender));
//     }
//   };

//   const handleKnowledgeLevelFilterChange = (event) => {
//     const selectedKnowledgeLevel = event.target.value;
//     if (event.target.checked) {
//       setKnowledgeLevelFilter([...knowledgeLevelFilter, selectedKnowledgeLevel]);
//     } else {
//       setKnowledgeLevelFilter(knowledgeLevelFilter.filter((kl) => kl !== selectedKnowledgeLevel));
//     }
//   };

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredLecturers = lecturers.filter((lecturer) => {
//     return (
//       genderFilter.length === 0 || genderFilter.includes(lecturer.gender) &&
//       knowledgeLevelFilter.length === 0 || knowledgeLevelFilter.includes(lecturer.knowledgeLevel) &&
//       lecturer.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <h2>סינון מרצים</h2>
//       <h3>מין</h3>
//       <div>
//         <input type="checkbox" value="גבר" onChange={handleGenderFilterChange} checked={genderFilter.includes('גבר')} />
//         <label>גבר</label>
//       </div>
//       <div>
//         <input type="checkbox" value="אישה" onChange={handleGenderFilterChange} checked={genderFilter.includes('אישה')} />
//         <label>אישה</label>
//       </div>
//       <h3>רמת ידע</h3>
//       <div>
//         <input type="checkbox" value="מתחיל" onChange={handleKnowledgeLevelFilterChange} checked={knowledgeLevelFilter.includes('מתחיל')} />
//         <label>מתחיל</label>
//       </div>
//       <div>
//         <input type="checkbox" value="בינוני" onChange={handleKnowledgeLevelFilterChange} checked={knowledgeLevelFilter.includes('בינוני')} />
//         <label>בינוני</label>
//       </div>
//       <div>
//         <input type="checkbox" value="מתקדם" onChange={handleKnowledgeLevelFilterChange} checked={knowledgeLevelFilter.includes('מתקדם')} />
//         <label>מתקדם</label>
//       </div>
//       <h3>חיפוש לפי שם</h3>
//       <div>
//         <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
//       </div>
//     </div>
//   );
// };

// export default LecturerFilter;

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

  const handleCheckboxChange = (category, key) => {
    if (category === 'gender') {
      setGender({ ...gender, [key]: !gender[key] });
    } else if (category === 'ranks') {
      setRanks({ ...ranks, [key]: !ranks[key] });
    } else if (category === 'ageRange') {
      setAgeRange({ ...ageRange, [key]: !ageRange[key] });
    }
  };

  const handleFilterChange = () => {
    onFilter({ gender, ranks, ageRange });
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
            זכר
          </label>
          <label>
            <input
              type="checkbox"
              checked={gender.female}
              onChange={() => handleCheckboxChange('gender', 'female')}
            />
            נקבה
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label>דרגה:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={ranks.junior}
              onChange={() => handleCheckboxChange('ranks', 'junior')}
            />
            זוטר
          </label>
          <label>
            <input
              type="checkbox"
              checked={ranks.mid}
              onChange={() => handleCheckboxChange('ranks', 'mid')}
            />
            בינוני
          </label>
          <label>
            <input
              type="checkbox"
              checked={ranks.senior}
              onChange={() => handleCheckboxChange('ranks', 'senior')}
            />
            בכיר
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label>גיל:</label>
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
      <button onClick={handleFilterChange}>סנן</button>
    </div>
  );
};

export default FilterComponent;



