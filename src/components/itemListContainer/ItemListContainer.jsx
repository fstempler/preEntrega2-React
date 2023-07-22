import { Item } from "../Item/Item";
import './itemListContainer.css';

export const ItemListContainer = ({ products }) => (
    
        <div className="container d-flex flex-wrap justify-content-center">
            {products.map ((product) => (
                <Item 
                key={product.id}
                id={product.id}
                img={product.img} 
                genre={product.genre} 
                title={product.title} 
                artist={product.artist} 
                price={product.price} 
                type={product.type}
                />
            ))}    
        </div>
);

