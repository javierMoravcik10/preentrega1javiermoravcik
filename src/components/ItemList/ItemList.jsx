// import { useState, useEffect } from "react";
import "./itemlist.css";
import Item from "./Item";
import React from "react";
// import getItems from "../../Services/mockService";

// import { useParams } from "react-router-dom";

function ItemList({ products }) {
   
    // const [products, setProducts] = useState([]);
    // const { idCategory } = useParams();

    // async function getItemsAsync() {
    //   let respuesta = await getItems(idCategory);
    //   setProducts(respuesta);
    // }

    // useEffect(() => {
    //   getItemsAsync();
    // }, [idCategory]);

    return (
        <div className="item-list">
                {products.map((product) => {

            return  (
                <Item
                    key={product.id}
                    id={product.id}
                    imgurl={product.imgurl}
                    title={product.title}
                    price={product.price}
                    stock={product.stock}
                    discount={product.discount}
                    color="darkgreen"
                />
              );
})}       
         </div>
    );
}

export default React.memo(ItemList);