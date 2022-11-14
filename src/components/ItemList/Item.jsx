import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";

import { Link } from "react-router-dom";


function Item ({ title, imgurl, price, color, description, id }) {

    const urlDetail = `/detail/${id}`;

    return (
        <div className="card">
            <ToggleButton icon="♥"/>
            <div className="card-img">
                <img src={imgurl} alt={title} />
            </div>
            <div className="card-detail">
                <h3 className="h3Card">{title}</h3>
                <p>{description}</p>
                <p className="priceList" >${price}</p>
            <Link to={urlDetail}>
            <MyButton color={color}>Ver producto</MyButton>
            </Link>
            </div>
        </div>
    );
}

export default Item;