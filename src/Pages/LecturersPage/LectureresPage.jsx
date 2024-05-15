import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComp from '../../Components/Header/HeaderComp';


const LecturersByLanguage = () => {
  const { language } = useParams(); 
  const [lecturers, setLecturers] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const response = await axios.get(`http://localhost:3008/api/lectors?lecLangs=${language}`);
        const fetchedLecturers = response.data.lectors || [];

        console.log(response.data.lectors);
        const filteredLecturers = fetchedLecturers.filter(lecturer =>
          lecturer.lecLangs && lecturer.lecLangs.includes(language)
        );

        setLecturers(filteredLecturers);
        console.log(lecturers)
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

  const LecturerCard = ({ product }) => {
    return (
      <div className="product-card" key={product._id}>
        <div className="product-details">
          <h3>{product.lecFName}</h3>
          <h3>{product.lecLName}</h3>
          {/* <Link to={`/product/${product._id}`}>לפרטים נוספים</Link> */}
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

//   return (
//     <div>
//       <h1>מרצים שמלמדים </h1>

//       {lecturers.map((lecturer) => (
//         <p key={lecturer._id}>{lecturer.lecLName}</p>
//       ))}
//     </div>
//   );
// };

return (
  <div>
    <HeaderComp/>
    <h1>מרצים</h1>
    <ProductList products={lecturers} />
  </div>
);
};

export default LecturersByLanguage;



