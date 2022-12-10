import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "./ItemCount.css";

function ItemCount ({ stock, onAddToCart }) {
    const [count, setCount] = useState(1);

    function handleSuma(){
        if (count < stock) setCount(count + 1);
    }

    function handleResta(){
        if (count > 1) setCount(count - 1);
    }

    return (
        <div>
            <MyButton  onTouchButton={handleResta}>{"<"}</MyButton>
            <span> {count} </span>
            <MyButton onTouchButton={handleSuma} >{">"}</MyButton> - <button disabled={ stock <= 0 } className="buttonAdd" onClick={() => onAddToCart(count)} >Agregar 🛒 </button>
        </div>
    );
}

export default ItemCount;