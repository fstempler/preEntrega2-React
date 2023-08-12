import { useEffect, useState } from "react";
import { getRecords } from "../lib/records.requests"; //importa la función getRecords del array records
import { ItemListContainer } from "../components/itemListContainer/ItemListContainer"; //Importa itemListContainer
import { Loader } from '../components/Loader/Loader';
import { Carousel } from "../components/carousel/carousel";
                                    
//el componente Home usa useState para almacenar la lista de productos y luego utiliza useEffect 
//para obtener la lista de productos y actualizar el estado cuanto se monta en el DOM.
//Una vez que obtiene los productos, el componente itemListContainer se renderiza para mostrarlos en la página principal.
export const Home = () => {
    const[isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getRecords()
            .then(res => {
                setIsLoading(false);
                setProducts(res)}
            )
    }, []);

    if(isLoading) return <Loader />

    return (
        <div>
            <div>
                <Carousel />
                <ItemListContainer products={products}/>
            </div>
        </div>
    )
}