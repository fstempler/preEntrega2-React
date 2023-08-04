import { Item } from "../Item/Item";
import './itemListContainer.css';

export const ItemListContainer = ({ products, loading }) => (
    
        <div className="container d-flex flex-wrap justify-content-center">
            
            {loading ? (
                <>
                <div className="d-flex justify-content-center mainLoader">
                    <div className="row align-items-center">
                        <div className="Item col text-center">
                            <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>                    
                        </div>        
                    </div>                        
                </div>
                <div className="d-flex justify-content-center mainLoader">
                    <div className="row align-items-center">
                        <div className="Item col text-center">
                            <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>                    
                        </div>        
                    </div>                        
                </div>
                <div className="d-flex justify-content-center mainLoader">
                    <div className="row align-items-center">
                        <div className="Item col text-center">
                            <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>                    
                        </div>        
                    </div>                        
                </div>
                <div className="d-flex justify-content-center mainLoader">
                    <div className="row align-items-center">
                        <div className="Item col text-center">
                            <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>                    
                        </div>        
                    </div>                        
                </div>
                </>
            ) : (
            products.map ((product) => (
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
                ))
            )}    
        </div>
);

