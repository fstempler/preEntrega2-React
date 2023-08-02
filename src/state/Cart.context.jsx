import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, qty) => {
        setCart([...cart, {
            ...item,
            qty,
        }])
    }

    const value = {
        cart,
        addProduct
    }
    return (
        <CartContext.Provider value={[]} 
            displayName="cartContext">
            {children}
        </CartContext.Provider>
    ) 
    
}