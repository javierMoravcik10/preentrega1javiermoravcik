import "./mybutton.css";
import React, { useState, useEffect} from "react";

function MyButton(props) {
    let [colorBtn, setColorBtn] = useState(props.color);

    useEffect(() => {
    }, []);

    function handleClick() {
        setColorBtn("grey");
    }

    return (
        <button
            onClick={handleClick}
            style={{ backgroundColor: colorBtn, marginBottom: "10px" }}
            className="btn"
          >
         {props.children}  
        </button>
    );
}

export default MyButton;