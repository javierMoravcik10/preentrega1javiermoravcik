import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
import React from "react";


 function App() {

  return (
    
    <div>
    <NavBar/>
    <ItemListContainer greeting="¡Bienvenidos a Guatambú!" />
    </div>
    
  );
}

export default App;




