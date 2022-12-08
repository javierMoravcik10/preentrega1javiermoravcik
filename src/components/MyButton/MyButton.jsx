import "./mybutton.css";
import React, { useState } from "react";

function MyButton(props) {
    let [colorBtn] = useState(props.colorBtn);

    // useEffect(() => {
    // }, []);

    // function handleClick() {
    //     setColorBtn("grey");
    // }

    return (
        <button 
            onClick={props.onTouchButton}
            style={{ backgroundColor: colorBtn, marginBottom: "10px" }}
            className="btn"
          >
         {props.children}  
        </button>
    );
}

export default MyButton;