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
                    <button onClick={() => handleSum()} className="btn btn-dark" disabled={count > (stock - 1)}>+</button>
                </div>
                <button
                    className="item-count__add btn btn-dark"
                    disabled={stock === 0}
                    onClick={() => {
                        onAdd(count);
                        setCount(1);
                    }}
                >
                    Add to cart
                </button>
                </>    
            ) : (
                <h5>Out of stock</h5>
            )}
        </div>    
                
        );
};

