import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../Services/firestore";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemListContainer() {

    const [products, setProducts] = useState(null);
    const { idCategory } = useParams();

    async function getItemsAsync() {
        if ( !idCategory ) {
            let respuesta = await getItems();
            setProducts(respuesta);
        }
        //borramos el idCategory dentro de getItems()
        else {
            let respuesta = await getItemsByCategory(idCategory)
            setProducts(respuesta)
        }
    }

    useEffect(() => {
        getItemsAsync();
    }, [idCategory]);

    return <>{ 
        products 
        ? <ItemList products={products} /> 
        : <h2 className="loader"><Loader/></h2> 
        }
        </>;   
}

export default ItemListContainer;