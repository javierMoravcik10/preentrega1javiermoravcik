import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";


 function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:idCategory" element={<ItemListContainer />}/>
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      <Route path="*" element={ <h1>Error 404: Este página no existe.</h1> } />
    </Routes>  
    
    </BrowserRouter>  
  );
}

export default App;




