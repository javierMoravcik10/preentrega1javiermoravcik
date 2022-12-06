import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";


function ItemDetailContainer() {
   
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); 

    async function getItemsAsync() {
        getSingleItem(id).then( respuesta => {
            setProduct(respuesta);
            setIsLoading(false);
    })
}
    //     let respuesta = await getSingleItem(id);
    //     setProduct(respuesta);
    // }

    useEffect(() =>  {
        getItemsAsync();
}, [id]);

if(isLoading)
        return <h2 className="loader"><Loader/></h2> 

    return (
        <ItemDetail product={product} />
    )

    // return (
    //     <div>
    //         <ItemDetail product={product}/>
    //      </div>
    // );
}

export default ItemDetailContainer;