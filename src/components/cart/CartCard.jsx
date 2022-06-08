import "./cartCard.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useProducts } from "../../context/products-context";

function CartCard({ item }) {
  const {
    brand,
    description,
    price: { actual, discounted },
    discount,
    imageSrc,
    quantity,
  } = item;
  const {
    removeFromCartHandler,
    addToSaveLater,
    increaseQuantity,
    decreaseQuantity,
  } = useProducts();

  return (
    <div className="horizontal-card">
      <img src={imageSrc} alt={description} className="horizontal-card-image" />
      <div className="card-content">
        <h1 className="fs-m card-text-highlight">{brand}</h1>
        <p className="fs-s">{description}</p>
        <p className="fs-s">
          <del>₹{actual}</del> ₹{discounted}
          <span className="discount">{discount}%</span>
        </p>
        <div className="quantity">
          {quantity > 1 ? (
            <button onClick={() => decreaseQuantity(item)}>
              <AiOutlineMinus className="fs-m" />
            </button>
          ) : (
            <button>
              <AiOutlineMinus className="fs-m" />
            </button>
          )}

          <span className="fs-m">{quantity}</span>
          <button onClick={() => increaseQuantity(item)}>
            <AiOutlinePlus className="fs-m" />
          </button>
        </div>
        <div className="cartCard-cta">
          <button
            className="btn btn-secondary d-flex-center"
            onClick={() => removeFromCartHandler(item)}
          >
            Remove
          </button>
          <button
            className="btn btn-secondary-outline"
            onClick={() => addToSaveLater(item)}
          >
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
}

export { CartCard };
