import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Langugase.css';

const ProductCard = ({ product }) => {
  return (
    <div className="language-card" key={product.lang}>
      <div className="language-details">
        <h1>{product.lang}</h1>
        <h2 className="lecturer-description">{product.langPres}</h2>
        <button><Link to={`/product/${product.lang}`}>לרשימת מרצים</Link></button>
      </div>
    </div>
  );
};



const ProductList = ({ products }) => {
  return (
    <div className="language-list">
      {products.map((product) => (
        <ProductCard key={product.lang} product={product} />
      ))}
    </div>
  );
};

const Show = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3008/api/languages')
      .then(response => {
        setProducts(response.data.languages);
        console.log(response.data.languages);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      
      <ProductList products={products} />
    </div>
  );
};

export default Show;

