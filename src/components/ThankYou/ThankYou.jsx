import React from "react";
import "./thankYou.css"
import { useParams } from "react-router-dom";
 
function ThankYou(){
    const idOrder = useParams().idOrder;

    return(
        <div className="thankYou">
            <h1>¡Gracias por su compra!</h1>
            <p>El ID de su compra es: <strong>{idOrder}</strong></p>
        </div>
    );
}

export default ThankYou;