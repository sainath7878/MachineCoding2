const initialProductState = {
    allProducts: [],
    cart: [],
    saveForLater: [],
}

const productReducer = (productState, { type, payload }) => {
    switch (type) {
        case "SET_PRODUCTS":
            return { ...productState, allProducts: payload }
        case "SET_CART":
            return productState.cart.some(item => item.id === payload.id) ? { ...productState, cart: productState.cart.filter(item => item.id !== payload.id) } : { ...productState, cart: [...productState.cart, payload] }
        case "SET_SAVE_LATER":
            return productState.saveForLater.some(item => item.id === payload.id) ? { ...productState, saveForLater: productState.saveForLater.filter(item => item.id !== payload.id) } : { ...productState, saveForLater: [...productState.saveForLater, payload] }
        case "INCREASE_QUANTITY":
            return { ...productState, cart: productState.cart.map(item => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item) }
        case "DECREASE_QUANTITY":
            return { ...productState, cart: productState.cart.map(item => item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item) }
        default:
            return productState
    }
}

export { productReducer, initialProductState }