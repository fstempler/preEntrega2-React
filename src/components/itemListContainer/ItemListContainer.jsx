import React from "react";
import './itemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container d-flex justify-content-center">
            <h2 className="title">{greeting}</h2>
        </div>
    )
}

export default ItemListContainer