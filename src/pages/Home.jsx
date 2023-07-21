import { useEffect, useState } from "react";
import { getRecords } from "../lib/records.requests";
import  { ItemListContainer } from "../components/itemListContainer/ItemListContainer"; 
                                    

export const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getRecords()
            .then (res => setProducts(res))
    }, []);

    return (
        <div>
            <div>
                <ItemListContainer products={products}/>
            </div>
        </div>
    )
}