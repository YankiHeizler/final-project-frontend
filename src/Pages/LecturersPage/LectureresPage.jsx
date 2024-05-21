import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComp from '../../Components/Header/HeaderComp';
import './LecturersePage.css'



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
  </div>
);
};

export default LecturersByLanguage;



