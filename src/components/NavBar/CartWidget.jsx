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
    const itemCount = miContext.itemsInCart()

    return (
        <div className='cart1'>
        <FontAwesomeIcon icon={ faCartPlus } />
        { itemCount !== 0 && <sup>{itemCount}</sup>  }

        </div>
    )
}

export default CartWidget;