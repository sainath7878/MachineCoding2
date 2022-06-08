import { useProducts } from "../../context/products-context";
import { ProductCard } from "../../components/index";
import "./productListing.css";

function ProductListing() {
  const {
    productState: { allProducts },
  } = useProducts();
  return (
    <div className="all-products-container">
      {allProducts.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export { ProductListing };
