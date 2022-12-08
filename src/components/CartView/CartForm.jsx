import { useState } from "react";
import "./cartview.css" ;
import  { cartContext } from "../../context/cartContext";
import React, { useContext } from "react";


export default function CartForm(props) {
    const { clearCart } = useContext(cartContext);
    const [data, setData] = useState ({
        name: "",
        email: "",
        phone: "",
        addres: ""
    });

    function onInputChange (evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;

        let newData = {...data}
        newData[nameInput] = value;
        setData(newData)
    }

    function onSubmit(evt) {


        evt.preventDefault();
        props.onSubmit(evt, data);
        // console.log(`Tu nombre es: ${data.name}, your email: ${data.email} and your phone ${data.phone} years`);
    }

return (
    <form  onSubmit={onSubmit}>
            <div className="divForm" >
                <label htmlFor="name" className="labelForm">Nombre:</label>
                <input required value={data.name} name="name" type="text" onChange={onInputChange} />
            </div>

            <div className="divForm" >
                <label htmlFor="email" className="labelForm">Email:</label>
                <input required value={data.email} name="email" type="email" onChange={onInputChange} />
            </div>

            <div className="divForm" >
                <label htmlFor="phone" className="labelForm">Telefono:</label>
                <input  required value={data.phone} name="phone" type="phone" onChange={onInputChange} />
            </div>

            <div className="divForm" >
                <label htmlFor="addres" className="labelForm">Direccion:</label>
                <input required value={data.addres} name="addres" type="addres" onChange={onInputChange} />
            </div>

            {/* <button type="submit">Crear orden/Compra</button> */}
            <div className="myButton">
            {/* <MyButton disabled={data.name === "" || data.phone === "" || data.email === "" || data.addres === ""} colorBtn="green" onTouchButton={(evt)=>props.onSubmit(evt, data)}>
                Finalizar Compra
            </MyButton>  */}
            <button  className="buttonFinalizarCompra" type="submit" disabled={data.name === "" || data.phone === "" || data.email === "" || data.addres === ""} onClick={()=>clearCart()} >
             Finalizar compra
            </button>
            </div> 
    </form>
);

}