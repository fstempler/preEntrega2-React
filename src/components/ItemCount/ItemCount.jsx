import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock = 0, onAdd}) => {
    const [count, setCount] = useState(1);    

    const handleSum = () => {
        setCount(Math.max(1, count +1));
    };
    const handleSub = () => {
        setCount(Math.max(1, count -1));
    };
    return (
        <div className="itemCount">
            {stock ? (
                <>
                <div className="item-count__button">
                    <button onClick={() => handleSub()} className="btn btn-dark">-</button>
                    <span>  {count}  </span>
                    <button onClick={() => handleSum()} className="btn btn-dark">+</button>
                </div>
                <button
                    className="item-count__add btn btn-dark"
                    disabled={!stock}
                    onClick={() => {
                        onAdd(count);
                        setCount(1);
                    }}
                >
                    Add to cart
                </button>
                </>    
            ) : (
                <h5>All products are in your cart</h5>
            )}
        </div>    
                
        );
};

