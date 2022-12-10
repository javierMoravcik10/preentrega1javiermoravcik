import "./itemlist.css";
import Item from "./Item";
import React from "react";

function ItemList({ products }) {

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