
import { Link } from 'react-router-dom';
import './ProductList.css';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  let navigate = useNavigate(); 

  const navigateToProduct = (lang) =>{ 
    localStorage.setItem('lang', lang)
    navigate(`/product/${lang}`);
  };

  return (
    <div className="language-card">
      <div className="language-details">
        <h1>{product.lang}</h1>
        <h2 className="lecturer-description">{product.langPres}</h2>
      </div>
      <div className="language-footer">
        <button onClick={() => {navigateToProduct(product.lang)}}>
        לרשימת מרצים
        </button>
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

export default ProductList;
