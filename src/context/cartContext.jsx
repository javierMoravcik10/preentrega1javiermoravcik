import { createContext, useState } from "react";

// 1. Importamos e inicializamos el contexto con createContext()
export const cartContext = createContext();

//2. Creamos nuestro Context provider
export function CartContextProvider({children}){

    const [cart, setCart] = useState([]);

    function addToCart(product, count) {

        let itemAlreadyInCart = cart.findIndex(
            (itemInCart) => itemInCart.id === product.id
        );

        let newCart = [...cart];

        if (itemAlreadyInCart !== -1) {
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
        } else {
           
            product.count = count;
            newCart.push(product);
           
            setCart(newCart);
        }

    }

    function itemsInCart(){
        let total = 0;
        cart.forEach((itemInCart) => (total = total + itemInCart.count));
        return total;
    }

    function priceInCart() {
        /* Calcular el costo total de la compra */
        let totalPrice = 0;
        cart.forEach(
            ( producto ) =>
            (totalPrice = totalPrice + producto.price * producto.count)
            );
        return totalPrice;
    }



    function clearCart(){
        setCart([]);
    }



    function removeItem(idRemove) {
     const newCart = cart.filter(item => item.id!== idRemove)
        setCart(newCart);
    }

    return(
        <cartContext.Provider value={{ cart, addToCart, itemsInCart, removeItem, priceInCart, clearCart }} >
        {children}
        </cartContext.Provider>
    );
}