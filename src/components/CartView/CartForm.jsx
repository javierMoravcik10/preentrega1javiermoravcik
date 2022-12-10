import { useState } from "react";
import "./cartview.css" ;

export default function CartForm(props) {

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
        props.onSubmit(data);
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

            <div className="myButton">
          
            <button  className="buttonFinalizarCompra" type="submit" disabled={data.name === "" || data.phone === "" || data.email === "" || data.addres === ""}>
             Finalizar compra
            </button>
            </div> 
    </form>
);

}