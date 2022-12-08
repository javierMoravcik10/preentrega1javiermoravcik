import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import ThankYou from "./components/ThankYou/ThankYou";
// import { useEffect } from "react";
// import {DB, products} from "./Services/firestore";
// import {addDoc, collection} from "firebase/firestore";

// import { getItems } from "./Services/firestore";

 function App() {
  // getItems();
  // useEffect(() => {
    //  const productosCollection = collection(DB, "products")
    //  products.map((item)=> addDoc(productosCollection, item))
  // },[])

  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:idCategory" element={<ItemListContainer />}/>
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<CartView/>} />
      <Route path="/thankyou/:idOrder" element={<ThankYou/>} />
      <Route path="*" element={ <h5>Error 404: Esta página no existe.</h5> } />
    </Routes>   
    
    </BrowserRouter>  
    </CartContextProvider>
  );
}

export default App;




