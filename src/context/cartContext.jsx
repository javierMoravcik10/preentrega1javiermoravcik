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
            // let newCart = cart.map( item => item); esto es un COMENTARIO
            // 1) agregando una propiedad COMENTARIO
            product.count = count;
            newCart.push(product);
            // 2)usando un spread ESTO ES UN COMENTARIO
            // newCart.push( ...product, count)  ESTO ES UN COMENTARIO
            setCart(newCart);
        }

                // ESTO ES LO QUE ESTABA BIEN
        // let newCart = [...cart];
        // product.count = count;
        // newCart.push(product)
        // setCart(newCart)
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

    // function clear(){
    //     vaciar el estado
    // }

    function removeItem(idRemove) {
        console.log("Eliminando el item:", idRemove);
        const newCart = [...cart];
       newCart.pop();
        setCart(newCart);
    }

    

    // function removeItem(idRemove){
        // cart.filter -> Filtrar todos los items con un ID diferente a "idRemove"
    // }

    // const value = {
    //     saludoContext,
    //     itemsInCart
    // };
    // 3. Retornamos el provider del context creado
    // 4. Pasamos en a prop "value" las variables que queramos hacer visibles.
    return(
        <cartContext.Provider value={{ cart, addToCart, itemsInCart, removeItem, priceInCart }} >
        {children}
        </cartContext.Provider>
    );
}