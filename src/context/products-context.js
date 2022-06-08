import { createContext, useContext, useReducer } from "react"
import { productReducer, initialProductState } from "../reducer/productReducer";

const ProductContext = createContext();

function ProductsProvider({ children }) {

    const [productState, productDispatch] = useReducer(productReducer, initialProductState);

    const addToCarthandler = (item) => {
        productDispatch({ type: "SET_CART", payload: { ...item, quantity: 1 } });
    }

    const removeFromCartHandler = (item) => {
        productDispatch({ type: "SET_CART", payload: item });
    }

    const addToSaveLater = (item) => {
        removeFromCartHandler(item);
        productDispatch({ type: "SET_SAVE_LATER", payload: item })
    }

    const removeFromSaveLaterHandler = (item) => {
        productDispatch({ type: "SET_SAVE_LATER", payload: item });
    }

    const addToCartFromSaveLaterHandler = (item) => {
        removeFromSaveLaterHandler(item);
        addToCarthandler(item);
    }

    const increaseQuantity = (item) => {
        productDispatch({ type: "INCREASE_QUANTITY", payload: item })
    }

    const decreaseQuantity = (item) => {
        productDispatch({ type: "DECREASE_QUANTITY", payload: item })
    }

    return (
        <ProductContext.Provider value={{ productState, productDispatch, addToCarthandler, removeFromCartHandler, addToSaveLater, removeFromSaveLaterHandler, addToCartFromSaveLaterHandler, increaseQuantity, decreaseQuantity }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext);

export { ProductsProvider, useProducts };