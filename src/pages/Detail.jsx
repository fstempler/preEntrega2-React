import { useEffect, useState } from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { Item } from "../components/Item/Item";
import { getRecord } from '../lib/records.requests';
import { useParams } from 'react-router-dom';
import '../styles/detail.css';
import { useCartContext } from "../state/Cart.context";

//Detail utiliza useParams para obtener el tipo de producto que quiere mostrar.
//Utiliza useState para almacenar el listado de productos ya filtrado y 
//useEffect para obtener el listado filtrado y actualiza cuando se monta en el DOM o cuando se modifica el valor de 'id'
//Utiliza el componente itemListaContainer para mostrar la lista de productos filtrada por la el tipo en la página. 
//Realiza una verificación para asegurarse que los datos están disponibles antes de renderizar. 
//Renderiza las especificaciones del producto. 


export const Detail = () => {
    const {id} = useParams();
    const [record, setRecord] = useState({});
    const {addProduct} = useCartContext();
    

    useEffect(() => {
        getRecord(+id).then((res) => {
            setRecord(res);
        });
    }, []);

    const handleAdd = (qty) => {
        addProduct(record, qty);
    }
    
    if (record === null || Object.keys(record).length === 0) return null;

     return (
        <div className="container">
            <div className="detail row">
                <div className="detail__img col-sm d-flex align-items-center">
                    <img src={record.img} alt={record.title} />
                </div>
            <div className="detail__info col-sm d-flex align-items-start flex-column align-content-between flex-wrap">                
                <span className="detail__info-title">{record.title}</span>
                
                <span className="detail__info-artist">{record.artist}</span>
                
                <span className="detail__info-type">{record.type}</span>
                <br />                                
                <p className="detail__info-review">{record.review}</p>
                
                <span className="detail__info-price">${(record.price)}</span>
                <br />
                <span className="detail__info-stock">Only {record.stock} left!</span>
                <ItemCount stock={record.stock} onAdd={handleAdd} />
                
            </div>
            
            </div>
        </div>
     );
};