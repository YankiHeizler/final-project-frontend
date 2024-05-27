import { Link } from "react-router-dom";
import './LecturerList.css';


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

  const LecturerList = ({ products }) => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <LecturerCard key={product._id} product={product} />
        ))}
      </div>
    );
  };


export default LecturerList