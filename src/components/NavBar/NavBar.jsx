import React from "react";
import CartWidget from "./CartWidget";
import LogoNav from "./LogoNav";
import "./NavBarStyle.css";



function NavBar(){
    return (
        <div className="headerMenu">
            <div className="logoNav">
             <LogoNav imgurl="/imgs/ultguata.jpg" />
        </div>
        <nav>
            <ul className="btnMenu">
                <li>
                    <input type="search" value="Buscar" class="buscador"/>
                  </li>             
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Hombre</a>
                </li>
                <li>
                    <a href="/">Mujer</a>
                </li>
                <li>
                    <a href="/">Nosotros</a>
                </li>
                <li>
                    <a href="/"><CartWidget counter="0"/></a>
                </li>
            </ul>
        </nav>
        </div>
    ) 
}

export default NavBar