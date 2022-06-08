import { useState, useEffect } from "react";
import { useProducts } from "../../context/products-context";
import "./amount.css";

function Amount() {
  const {
    productState: { cart },
  } = useProducts();

  const [amount, setAmount] = useState({
    TotalMRP: 0,
    discounted: 0,
  });

  useEffect(() => {
    setAmount(() =>
      cart.reduce(
        (acc, { price, quantity }) => ({
          ...acc,
          TotalMRP: acc.TotalMRP + price.actual * quantity,
          discounted: acc.discounted + price.discounted * quantity,
        }),
        { TotalMRP: 0, discounted: 0 }
      )
    );
  }, [cart]);
  return (
    <div>
      <h1 className="fs-s mb-sm">PRICE DETAILS: ({cart.length} Items)</h1>
      <ul className="amount-list">
        <li className="fs-s">Original Price: {amount.TotalMRP}</li>
        <li className="fs-s">
          Total Discount on MRP: {amount.TotalMRP - amount.discounted}
        </li>
        <li className="fs-s">Total Amount: {amount.discounted}</li>
      </ul>
    </div>
  );
}

export { Amount };
