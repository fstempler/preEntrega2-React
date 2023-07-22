import { useNavigate } from "react-router-dom";
import "./item.css";

export const Item = ({
    id,
    img, 
    genre,
    title, 
    artist,
    price,
    type

}) => {
    const navigate = useNavigate();
    return (
        
        <div className="d-flex flex-wrap justify-content-center main" onClick={() => navigate (`/item/${id}`)}>
            <div className="row">
                <div className="Item col">
                    <div className="item__img">
                        <img src={img} />
                    </div>
                    <div className="item__content">
                        <div className="item__content-info">
                            <span className="item__content-type">{type}</span>
                            <br />
                            <span className="item__content-genre">{genre}</span>
                            <br />
                            <span className="item__content-title">{title}</span>
                            <br />
                            <span className="item__content-artist">{artist}</span>
                        </div>
                        <span className="item__content-price">${price}</span>                                                                
                    </div>
                    <div className="item__btn">
                        <button type="button" className="btn btn-dark">Buy</button>
                    </div>                
                </div>        
                
            </div>
                         
        </div>
        
    );
    };