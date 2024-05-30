
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Langugase.css';
import ProductList from '../ProductList/ProductList';



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

