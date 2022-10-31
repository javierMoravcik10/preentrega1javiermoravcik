import React from 'react'
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./NavBarStyle.css";


import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget({counter}){

  console.log(iconList);


    return (
        <div className='cart1'>
        <FontAwesomeIcon icon={ faCartPlus } />
        <sup className="sup">{counter}</sup>

        </div>
    )
}

export default CartWidget