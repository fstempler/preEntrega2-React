import { useEffect, useState } from "react";
import { getRecords } from "../lib/records.requests"; //importa la función getRecords del array records
import  { ItemListContainer } from "../components/itemListContainer/ItemListContainer"; //Importa itemListContainer
                                    
//el componente Home usa useState para almacenar la lista de productos y luego utiliza useEffect 
//para obtener la lista de productos y actualizar el estado cuanto se monta en el DOM.
//Una vez que obtiene los productos, el componente itemListContainer se renderiza para mostrarlos en la página principal.
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