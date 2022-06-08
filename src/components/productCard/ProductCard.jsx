import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products-context";
import "./productCard.css";

function ProductCard({ item }) {
  const {
    brand,
    description,
    price: { actual, discounted },
    discount,
    imageSrc,
    id,
  } = item;

  const {
    productState: { cart },
    addToCarthandler,
  } = useProducts();

  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={imageSrc} alt={description} className="card-image" />
      <h1 className="fs-s card-text-highlight">{brand}</h1>
      <p className="fs-s">{description}</p>
      <p className="fs-s">
        <del>₹{actual}</del> ₹{discounted}
        <span className="discount">{discount}%</span>
      </p>
      <div className="cta-container d-flex align-center">
        {cart.some((item) => item.id === id) ? (
          <button
            className="btn btn-secondary d-flex-center"
            onClick={() => navigate("/cart")}
          >
            Go to Cart
          </button>
        ) : (
          <button
            className="btn btn-secondary d-flex-center"
            onClick={() => addToCarthandler(item)}
          >
            <FaShoppingCart className="fs-s mr-sm" /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export { ProductCard };
