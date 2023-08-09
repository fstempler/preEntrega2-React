import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";
import { NavLink } from "react-router-dom";
import '../styles/cart.css';




export const Cart = () => {        
        const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();


    //     useEffect(() => {console.log({ cart });
    // }, [cart]);
    return <div className="container">
        {
            cart.length ? 
        <>
        <div className="totalContainer">
        
            <span className="total">Total: ${getTotalPrice().toLocaleString("es-US",{minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </span>
        
            <button onClick={() => cleanCart()} className="btn btn-dark">Empty Cart</button>
                
        
        </div>
        
        {
            cart.map((item) => <div className="itemContainer container text-center" key={item.id}>
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
        <div className="btnBuyContainer">  
            <div className="nav-item">
            <NavLink to={"/cartform"} className="nav-link"><button className="btn btn-warning">Buy!</button></NavLink>                                     
            </div>            
        </div>
        </> : <div className="text-center emptyCart">
                <h4 className="text-center">Cart is empty</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </div>  
        }
    </div>
};