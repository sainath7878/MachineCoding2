import { useProducts } from "../../context/products-context";

function SaveForLaterCard({ item }) {
  const {
    brand,
    description,
    price: { actual, discounted },
    discount,
    imageSrc,
  } = item;

  const {
    productState: { cart, saveForLater },
    removeFromSaveLaterHandler,
    addToCartFromSaveLaterHandler,
  } = useProducts();

  console.log(cart, saveForLater);
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
        <div className="cartCard-cta">
          <button
            className="btn btn-secondary d-flex-center"
            onClick={() => addToCartFromSaveLaterHandler(item)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-secondary-outline"
            onClick={() => removeFromSaveLaterHandler(item)}
          >
            Remove from Save Later
          </button>
        </div>
      </div>
    </div>
  );
}

export { SaveForLaterCard };
