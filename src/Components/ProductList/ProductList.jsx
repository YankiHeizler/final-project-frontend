
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductCard = ({ product }) => {
  return (
    <div className="language-card">
      <div className="language-details">
        <h1>{product.lang}</h1>
        <h2 className="lecturer-description">{product.langPres}</h2>
      </div>
      <div className="language-footer">
        <button>
          <Link to={`/product/${product.lang}`}>לרשימת מרצים</Link>
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
