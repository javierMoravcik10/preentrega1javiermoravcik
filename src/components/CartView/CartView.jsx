import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import "./cartview.css" ;
import "../ItemDetail/ItemDetail.css";
import { createOrder, exportArrayToFirestore } from "../../Services/firestore";


function CartView() {
    const { cart, removeItem, priceInCart } = useContext(cartContext);
    let navigate = useNavigate();

    function handleExport(){
        exportArrayToFirestore();
    }
    
    if (cart.length === 0) 
    return (
        <div>
    <h5>Carrito vacio</h5>
    </div>
    );
        //   clear, priceCart

   async function handleCheckout(evt){
        const order = {
            buyer: {
                name: "Javier",
                email: "javierm.6519@gmail.com",
                phone: "453453"
            },
            items: cart,
            total: priceInCart(),
            date: new Date(),
        };
    
    const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`);
    }

    return (
            <div className="viewContainer">    
            {cart.map((item) => ( 
                // LE SACAMOS EL RETURN DE ABAJO Y LE PONEMOS LAS () POR LAS {}
                <div key={item.id} className="cartView">
                    <div className="card-img2">
                    <img src={item.imgurl} alt="" />
                    </div>
                    <div>
                    <p className="titleCartView">{item.title}</p>
                    <hr />
                    <p>Categoria: {item.category}</p>
                    <div className="flex">
                    <div>
                    <p className="priceCartView">Precio unitario: ${item.price}</p>
                    <p>Marca: {item.marca}</p>
                    </div>
                    <div>
                    <p className="unityCartView">Unidades: {item.count}</p>
                    <p><strong className="priceStrongDetail" >ENVIO SIN CARGO</strong></p>
                    </div>
                    </div>
                    <MyButton onTouchButton={()=>removeItem(item.id)} colorBtn="red">
                        X
                    </MyButton>
            <MyButton colorBtn="green" onTouchButton={handleCheckout}>
                Finalizar Compra
            </MyButton>        
            <MyButton>Vaciar Carrito</MyButton>
    <button onClick={handleExport}>Borrenme</button>
            </div>
            
                    </div>
            ))}
            
            
                </div>
    );
}

export default CartView;