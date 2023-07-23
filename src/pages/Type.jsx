import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getTypes } from "../lib/records.requests";
import { ItemListContainer } from "../components/itemListContainer/ItemListContainer";

export const Type = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getTypes(id)
        .then(res => {
            setProducts(res)}
            )
    }, [id]);
    return (
        <div>
            <div>
            <ItemListContainer products={products} />
            </div>
        </div>
    )
}