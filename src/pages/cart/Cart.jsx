import { Amount, CartCard, SaveForLaterCard } from "../../components";
import { useProducts } from "../../context/products-context";
import "./cart.css";

function Cart() {
  const {
    productState: { cart, saveForLater },
  } = useProducts();
  return (
    <>
      <h1 className="text-align-center fs-xl mb-sm">
        My Cart({cart.length}) items
      </h1>
      <div className="cart-container">
        <div className="cart-products">
          {cart && cart.length > 0 ? (
            cart.map((item) => {
              return <CartCard key={item.id} item={item} />;
            })
          ) : (
            <h1 className="fs-l">No items in Cart</h1>
          )}
          {saveForLater && saveForLater.length > 0 ? (
            <h1 className="fs-l">Save Later ({saveForLater.length})</h1>
          ) : (
            <h1>No items in Save Later</h1>
          )}
          {saveForLater &&
            saveForLater.length > 0 &&
            saveForLater.map((item) => {
              return <SaveForLaterCard key={item.id} item={item} />;
            })}
        </div>
        <div className="amount">
          <Amount />
        </div>
      </div>
    </>
  );
}

export { Cart };
