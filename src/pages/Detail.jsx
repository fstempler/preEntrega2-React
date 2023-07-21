import { useEffect, useState } from "react";
import { getRecord } from '../lib/records.requests';
import { useParams } from 'react-router-dom';
import '../styles/detail.css';

export const Detail = () => {
    const {id} = useParams();
    const [record, setRecord] = useState({});

    useEffect(() => {
        getRecord(+id).then((res) => {
            setRecord(res);
        });
    }, []);
    
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
                <div className="item__btn">
                    <button type="button" className="btn btn-dark">Buy</button>
                </div>   
            </div>
            
            </div>
        </div>
     );
};