import React from "react";


//ne pas oulier le destructuring  ===>  {}
function Button({btnColor, btnInc, children, handleClick}){
    return (
        <>
            <button onClick={() => handleClick(btnInc)} className={`btn btn-${btnColor} m-5`}>+{btnInc} %</button>
        </>
    )
}

export default Button;