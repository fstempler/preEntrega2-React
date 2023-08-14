import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    //Función para añadir productos al carrito

    const addProduct = (item, qty) => {
        const existingProduct = cart.find((product) => product.id === item.id);
    
        if (!existingProduct) {
            return setCart([...cart, {...item, qty}]);
        }
    
        const updatedQty = existingProduct.qty + qty;
    
        if (updatedQty <= item.stock) {
            const newCart = cart.map((product) =>
                product.id === item.id ? {...product, qty: updatedQty} : product
            );
            setCart(newCart);
        } else {
            toast.error('❗❗ Can`t add to cart. Already added complete stock', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    };    

    
    //Función para eliminar productos del carrito
    const removeProduct = (id) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    }
    //Función para vaciar el carrito
    const cleanCart = () => setCart([]);
    //Función para mostrar la cantidad de productos en el cart
    const getCartQty = () => cart.reduce((acc, item) => acc + item.qty, 0);
    //Valor total compra
    const getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    //Función para agregar productos una vez en el carrito    
    const increaseQuantity = (id) => {
        const newCart = cart.map((item) => {
            if (item.id === id && item.qty < item.stock) {
                return {...item, qty: item.qty + 1};
            }
            return item;
        });
        setCart(newCart);
    }
    //Función para disminuir la cantidad de un producto una vez en el carrito
    const decreaseQuantity = (id) => {
        const newCart = cart.map((item) =>
            item.id === id ? {...item, qty: Math.max(item.qty - 1, 1)} : item
            );

        setCart(newCart);
    }

    const value = {
        cart,
        addProduct,
        getCartQty,
        removeProduct,
        cleanCart,
        getTotalPrice,
        increaseQuantity,
        decreaseQuantity
    }
    return (
        <CartContext.Provider value={value} 
            displayName="cartContext">
            {children}
        </CartContext.Provider>
    ) 
    
}