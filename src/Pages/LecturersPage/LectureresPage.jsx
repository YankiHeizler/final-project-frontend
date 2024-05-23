import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import HeaderComp from '../../Components/Header/HeaderComp';
import FilterComponent from '../../Components/Filter/FilterComponent';
import './LecturersePage.css';

const LecturersByLanguage = () => {
  const { language } = useParams();
  const [lecturers, setLecturers] = useState([]);
  const [filteredLecturers, setFilteredLecturers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
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

  const handleFilter = (filters) => {
    const { gender, ranks, ageRange } = filters;
    const filtered = lecturers.filter((lecturer) => {
      const genderValid = 
        (!gender.male && !gender.female) ||
        (gender.male && lecturer.lecSex === 'ז') ||
        (gender.female && lecturer.lecSex === 'נ');

        const ranksValid = 
        (!ranks.junior && !ranks.mid && !ranks.senior) || 
        (ranks.junior && lecturer.lecStudyLevels.includes('בסיסית')) || 
        (ranks.mid && lecturer.lecStudyLevels.includes('ביניים')) || 
        (ranks.senior && lecturer.lecStudyLevels.includes('מתקדמת'));

      const ageValid = 
        (!ageRange.under30 && !ageRange.from30to50 && !ageRange.over50) ||
        (ageRange.under30 && lecturer.age < 30) ||
        (ageRange.from30to50 && lecturer.age >= 30 && lecturer.age <= 50) ||
        (ageRange.over50 && lecturer.age > 50);

      return genderValid && ranksValid && ageValid;
    });
    setFilteredLecturers(filtered);
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!lecturers.length) {
    return <div>Loading...</div>;
  }

  const LecturerCard = ({ product }) => {
    return (
      <div className="product-card" key={product._id}>
        <div className="product-details">
          <h3>{product.lecFName}</h3>
          <h3>{product.lecLName}</h3>
          <img src={product.lecFoto} alt="photo" />
          <Link to={`/product/lectors/${product._id}`}>לפרטי המרצה</Link>
        </div>
      </div>
    );
  };

  const ProductList = ({ products }) => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <LecturerCard key={product._id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <HeaderComp />
      <div className="main-container">
        <ProductList products={filteredLecturers} />
        <FilterComponent onFilter={handleFilter} />
      </div>
    </div>
  );
};

export default LecturersByLanguage;





