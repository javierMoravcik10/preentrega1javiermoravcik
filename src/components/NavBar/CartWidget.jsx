import React from 'react'
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./NavBarStyle.css";



function CartWidget({counter}){

    return (
        <div className='cart1'>
        <FontAwesomeIcon icon={ faCartPlus } />
        <sup className="sup">{counter}</sup>

        </div>
    )
}

export default CartWidget