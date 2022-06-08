import './App.css';
import { Route, Routes } from 'react-router-dom';
import data from "./data/products.json"
import { Cart, ProductListing } from "./pages/index";
import { useEffect } from 'react';
import { useProducts } from './context/products-context';

function App() {
  const { products } = data;
  const { productDispatch } = useProducts();
  useEffect(() => {
    products && products.length > 0 && productDispatch({ type: "SET_PRODUCTS", payload: products })
  }, [products]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
