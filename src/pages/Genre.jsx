import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getRecords } from "../lib/records.requests";
import { ItemListContainer } from "../components/itemListContainer/ItemListContainer";

export const Genre = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getRecords(id)
        .then(res => {
            setProducts(res)}
            )
    }, [id]);
    return (
        <div>
            <div className="container">
            <ItemListContainer products={products} />
            </div>
        </div>
    )
}