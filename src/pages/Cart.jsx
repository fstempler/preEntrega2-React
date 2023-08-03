import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";
import '../styles/cart.css'

export const Cart = () => {
        const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();
        useEffect(() => {console.log({ cart });
    }, [cart]);
    return <div className="container">
        <div className="totalContainer">
            <span className="total">Total: ${getTotalPrice().toLocaleString("es-US",{minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </span>
        </div>
        
        {
            cart.map((item) => <div className="itemContainer container text-center">
                <div className="row align-items-start">
                <div className="col">
                    <img className="imgProduct" src={item.img} />
                </div>
                
                <div className="infoContainer col">
                    <span className="title">{item.title}</span>
                    <span>{item.artist}</span>
                    <span>${item.price}</span>
                    <span>Quantity: {item.qty}</span>
                    <span>Total: ${(item.qty * item.price).toFixed(2).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="col removeContainer">
                    <button className="btn btn-dark" key={item.id} onClick={() => removeProduct(item.id)}>
                    Remove Item
                    </button>
                </div>
                </div>
                </div>)
        }
        <div className="btnContainer">                
                <button onClick={() => cleanCart()} className="btn btn-dark">Empty Cart</button>
        </div>
    </div>
};