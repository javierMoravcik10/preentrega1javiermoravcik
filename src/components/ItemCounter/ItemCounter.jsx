import React from "react";
import "./ItemCounter.css";

function ItemCounter(props){
    let [count, setCount] = React.useState(1)

    function handleSuma(){
        if (count < props.stock)
            setCount(count+1);
    }

    function handleResta(){
        if (count > 1)
            setCount(count-1);
    }

    return (
        <div>
            <button className="btnCounter" onClick={handleResta}>-</button>
            <span> {count} </span>
            <button className="btnCounter" onClick={handleSuma} >+</button> - <button className="btnCounter" >Agregar 🛒 </button>
        </div>
    )
}

export default ItemCounter;