import React from "react";
import './button.css'
function Button(props){
    return(
        <div>
            <button class="ele" onClick={props.Click} value={props.val}>{props.val}</button>
        </div>
    )
}
export default Button;