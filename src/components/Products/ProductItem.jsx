import "./ProductItem.css";
import PropTypes from "prop-types";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt="product image" />
      </div>
      <div className="product-info">
        <strong>{props.title}</strong>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductItem;
