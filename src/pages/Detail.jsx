import { useEffect, useState } from "react";
import { getRecord } from '../lib/records.requests';
import { useParams } from 'react-router-dom';

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
            <div className="detail">
                <div className="detail__img">
                    <img src={record.img} alt={record.title} />
                </div>
            <div className="detail__info">
                <span className="detail__info-type">{record.type}</span>
                <span className="detail__info-title">{record.title}</span>
                <span className="detail__info-artist">{record.artist}</span>
                <p className="detail__info-review">{record.review}</p>
                <span className="detail__info-price">${(record.price)}</span>
                <span className="detail__info-stock">{record.stock} left!</span>
            </div>
            </div>
        </div>
     );
};