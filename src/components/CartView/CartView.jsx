import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import "./cartview.css" ;
import "../ItemDetail/ItemDetail.css";
import { createOrder } from "../../Services/firestore";
import CartForm from "./CartForm";


function CartView() {
    const { cart, removeItem, priceInCart, clearCart } = useContext(cartContext);
    let navigate = useNavigate();
    
    if (cart.length === 0) 
    return (
        <div className="cartNoProducts">
    <h5>El carrito no tiene productos.</h5>
    <a className="youA" href="http://localhost:3000/">
        Seguir comprando
           </a>
    </div>
    );

   async function handleCheckout(evt, data){
        const order = {
            buyer: data,
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
                    <p className="priceCartView">Precio unitario: <strong>{item.price}</strong></p>
                    <p>Marca: {item.marca}</p>
                    </div>
                    <div>
                    <p className="unityCartView">Unidades: <strong>{item.count}</strong></p>
                    <p><strong className="priceStrongDetail" >ENVIO SIN CARGO</strong></p>
                    </div>
                    </div>
                    <MyButton onTouchButton={()=>removeItem(item.id)} colorBtn="red">
                    X                        
                    </MyButton>
            </div>
            
                    </div>
            ))}
            <div className="totalPrice">
            <p className="TotalAPagar" ><strong>Total a pagar: ${priceInCart()}.</strong></p>
            
            <CartForm onSubmit={handleCheckout}/>
            </div>
            <div>
            <button  onClick={()=>clearCart()} className="clearCart">Vaciar Carrito</button>
            </div>
            
            
                </div>
    );
}

export default CartView;