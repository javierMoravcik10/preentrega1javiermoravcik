import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import CartWidget from "./CartWidget";
import LogoNav from "./LogoNav";
import "./NavBarStyle.css";

import { Link } from "react-router-dom";

function NavBar(){
    return (
        <div className="headerMenu">
            <div className="logoNav">
                <Link to="/">
             <LogoNav imgurl="/imgs/ultguata.jpg" />
                </Link>
        </div>
        <nav className="nav-menu">
            <ul className="btnMenu nav-list">            
                <li>
                    <Link to="/category/Pantalones">Pantalones</Link>
                </li>
                <li>
                    <Link to="/category/Remeras">Remeras</Link>
                </li>
                <li>
                    <Link to="/category/Buzos">Buzos</Link>
                </li>
                {/* <li>
                    <Link to="/detail/id">Detalles</Link>
                </li> */}
                <li>
                    <Link to="/cart">
                        <CartWidget/>
                    </Link>
                    {/* <a href="/cart"><CartWidget counter="0"/></a> */}
                </li>
            <ToggleButton icon="💰"/>
            </ul>
        </nav>
        </div>
    ) 
}

export default NavBar;