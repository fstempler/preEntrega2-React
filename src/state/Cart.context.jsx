import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    //Función para añadir productos al carrito
    const addProduct = (item, qty) => {
        const element = cart.find((product) => product.id === item.id)
        if(!element) return setCart([...cart, {...item, qty, },]);
        
            const newCart = cart.map((product) => 
            product.id === item.id ? {...product, qty: product.qty + qty} : product);
                setCart(newCart);
        }; 
    //Función para eliminar productos del carrito
    const removeProduct = () => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    }
    //Función para vaciar el carrito
    const cleanCart = () => setCart([]);
    //Función para mostrar la cantidad de productos en el cart
    const getCartQty = () => cart.reduce((acc, item) => acc + item.qty, 0);
    //Valor total compra
    const getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    
        

    const value = {
        cart,
        addProduct,
        getCartQty,
        removeProduct,
        cleanCart,
        getTotalPrice
    }
    return (
        <CartContext.Provider value={value} 
            displayName="cartContext">
            {children}
        </CartContext.Provider>
    ) 
    
}