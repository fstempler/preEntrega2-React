import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";
import '../styles/cart.css'

export const Cart = () => {
        const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();
        useEffect(() => {console.log({ cart });
    }, [cart]);
    return <div className="container">
        <div className="totalContainer">
            <span>Total: ${getTotalPrice().toLocaleString({
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            })}
            </span>
        </div>
        
        {
            cart.map((item) => <div
            className="itemContainer"
            key={item.id} onClick={() => removeProduct(item.id)}>
                <img className="imgProduct" src={item.img} />
                <div className="infoContainer">
                    <span>{item.title}</span>
                    Artist: {item.artist}
                    Price: ${item.price}
                    Quantity: {item.qty}
                </div>
                </div>)
        }
        <div className="btnContainer">
                <button onClick={() => cleanCart()} className="btn btn-dark">Empty Cart</button>
        </div>
    </div>
};