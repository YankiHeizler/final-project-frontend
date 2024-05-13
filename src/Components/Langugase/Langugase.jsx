
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Langugase.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" key={product.lang}>
      <div className="product-details">
        <h3>{product.lang}</h3>
        <h2>{product.langPres}</h2>
        <Link to={`/product/${product.lang}`}>לפרטים נוספים</Link>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
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
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Show;

