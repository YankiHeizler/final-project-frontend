import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComp from '../../Components/Header/HeaderComp';
import './LecturersePage.css'
import FilterComponent from '../../Components/Filter/FilterComponent';



const LecturersByLanguage = () => {
  const { language } = useParams(); 
  const [lecturers, setLecturers] = useState([]);
  const [error, setError] = useState(null); 
  console.log(language)

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const response = await axios.get(`http://localhost:3008/api/lectors?lecLangs=${language}`);
        const fetchedLecturers = response.data.lectors || [];

        console.log(response.data.lectors);
        console.log(language)
        const filteredLecturers = fetchedLecturers.filter(lecturer =>
          lecturer.lecLangs && lecturer.lecLangs.includes(language)
        );

        setLecturers(response.data.lectors);

        setError(null);
      } catch (err) { 
        console.error('Error fetching lecturers:', err);
        setError(err.message);
      }
    };

    fetchLecturers();
  }, [language]); 

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  console.log(lecturers)

  const LecturerCard = ({ product }) => {
    return (
      <div className="product-card" key={product._id}>
        <div className="product-details">
          <h3>{product.lecFName}</h3>
          <h3>{product.lecLName}</h3>
          <h3>{product._id}</h3>
          <img src="{product.lecFoto}" alt="photo" />
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
    <HeaderComp/>
    <ProductList products={lecturers} />
    <FilterComponent />
  </div>
);
};

export default LecturersByLanguage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import HeaderComp from '../../Components/Header/HeaderComp';
// import FilterComponent from '../../Components/Filter/FilterComponent'; 


// const LecturersByLanguage = () => {
//   const { language } = useParams(); 
//   const [lecturers, setLecturers] = useState([]);
//   const [filteredLecturers, setFilteredLecturers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLecturers = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3008/api/lectors?lecLangs=${language}`);
//         const fetchedLecturers = response.data.lectors || [];
//         setLecturers(fetchedLecturers);
//         setFilteredLecturers(fetchedLecturers);
//         setError(null);
//       } catch (err) { 
//         console.error('Error fetching lecturers:', err);
//         setError(err.message);
//       }
//     };

//     fetchLecturers();
//   }, [language]); 

//   const handleFilter = (filters) => {
//     const { ageRange, gender, experienceRange } = filters;
//     const filtered = lecturers.filter(lecturer => {
//       const ageValid = (!ageRange.min || lecturer.age >= ageRange.min) && (!ageRange.max || lecturer.age <= ageRange.max);
//       const genderValid = !gender || lecturer.gender === gender;
//       const experienceValid = (!experienceRange.min || lecturer.experience >= experienceRange.min) && (!experienceRange.max || lecturer.experience <= experienceRange.max);
//       return ageValid && genderValid && experienceValid;
//     });
//     setFilteredLecturers(filtered);
//   };

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (!lecturers.length) {
//     return <div>Loading...</div>;
//   }

//   const LecturerCard = ({ product }) => {
//     return (
//       <div className="product-card" key={product._id}>
//         <div className="product-details">
//           <h3>{product.lecFName}</h3>
//           <h3>{product.lecLName}</h3>
//           <img src={product.lecFoto} alt="photo" />
//           <Link to={`/lectors/${product._id}`}>לפרטי המרצה</Link>
//         </div>
//       </div>
//     );
//   };

//   const ProductList = ({ products }) => {
//     return (
//       <div className="product-list">
//         {products.map((product) => (
//           <LecturerCard key={product._id} product={product} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <HeaderComp />
//       <ProductList products={filteredLecturers} />
//       <FilterComponent onFilter={handleFilter} />
//     </div>
//   );
// };

// export default LecturersByLanguage;




