import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";

import { Link } from "react-router-dom";


function Item ({ title, imgurl, price, color, description, id, discount, stock }) {

    const urlDetail = `/detail/${id}`;
    const stylePrice = { color: discount && "green" }

    return (
        <div className="card">
            <ToggleButton icon="♥"/>
            <div className="card-img">
                <img src={imgurl} alt={title} />
                
            </div>
            <div className="card-detail">
                <h3 className="h3Card">{title}</h3>
                <p>{description}</p>
                <p  style={stylePrice} className="priceList" >${price}</p>
                <p>{discount && <strong>Descuento: {discount}%</strong> }</p>
                <p> {stock <= 0 && <span>Sin stock disponible</span> } </p>
            <Link to={urlDetail}>
                <MyButton 
                   onTouchButton={() => console.log("click")} 
                    colorBtn={stock <= 0 && "#444444"}
                    >
                        Ver Producto
                    </MyButton>
            </Link>
            </div>
        </div>
    );
}

export default Item;