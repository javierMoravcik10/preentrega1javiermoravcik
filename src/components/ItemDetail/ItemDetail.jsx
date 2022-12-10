import "./ItemDetail.css"
import ToggleButton from "../ToggleButton/ToggleButton";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
 
import React, {} from "react";
import { useState } from "react";
import MyButton from "../MyButton/MyButton";


function ItemDetail( {product} ) {

    const { addToCart, cart } = useContext(cartContext)
    const [isInCart, setIsInCart]  = useState(false)

    function onAddToCart(count) {
        setIsInCart(count);
        addToCart(product,count)
    }

    let itemInContext = cart.find (itemInCart => itemInCart.id === product.id )
    let stockUpdated = itemInContext !== undefined ? product.stock - itemInContext.count : product.stock;

    return (
        <div className="item-list-detail">
            <div className="card1">
            <ToggleButton icon="♥"/>
            <div className="card-img1">
                <img src={product.imgurl} alt={product.title} />
            </div>
            <div className="card-detail1">
                <h3 className="h3Detail1">{product.title}</h3>
                <p className="descriptionDetail">{product.description}</p>
                <p className="priceDetail">${product.price} <strong className="priceStrongDetail" >NUEVO</strong><strong className="priceStrongDetail" >ENVIO GRATIS 🚛</strong> </p>
                <p className="descuentoDetail" >{product.descuento}</p>
                <div className="stockCounter" >
            <p className="disponibleDetail">{product.disponible}</p> 
            { isInCart ? (
                <Link to="/cart">
                <MyButton>Ir al Carrito</MyButton>
                </Link>
                 ) : (
                <ItemCount onAddToCart={onAddToCart} stock={stockUpdated} />
            )}
           
            </div>
            <div className="mybuttonDetail" >
            {product.mybutton}
            </div>
            <div className="nextPreview">
            <Link to={`/detail/${product.id - 1}`} >{"<<"}Anterior</Link>
            <span>  </span>
            <Link to={`/detail/${product.id + 1}`} >Siguiente{">>"}</Link>
            </div>
            </div>
        </div>
         </div>
    );
}

export default ItemDetail;