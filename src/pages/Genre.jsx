import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getRecords } from "../lib/records.requests";
import { ItemListContainer } from "../components/itemListContainer/ItemListContainer";

//Genre utiliza useParams para obtener el tipo de producto que quiere mostrar.
//Utiliza useState para almacenar el listado de productos ya filtrado y 
//useEffect para obtener el listado filtrado y actualiza cuando se monta en el DOM o cuando se modifica el valor de 'id'
//Por último utiliza el componente itemListaContainer para mostrar la lista de productos filtrada por la el tipo en la página. 

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
            <div>
            <ItemListContainer products={products} />
            </div>
        </div>
    )
}