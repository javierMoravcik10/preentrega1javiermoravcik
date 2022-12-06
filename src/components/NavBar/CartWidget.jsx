// import React from 'react';
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./NavBarStyle.css";
// 1. Importamos el hook context que queramos utilizar
import React, { useContext } from "react";
// 2. Importamos el context que queramos utlizar
import { cartContext } from "../../context/cartContext";
 

function CartWidget({counter}){
    const miContext = useContext(cartContext)
    // console.log(miContext);

    return (
        <div className='cart1'>
        <FontAwesomeIcon icon={ faCartPlus } />
        <sup>{miContext.itemsInCart()}</sup>
        {/* <sup className="sup">{counter}</sup> */}

        </div>
    )
}

export default CartWidget;