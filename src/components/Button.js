import React from "react";


//ne pas oulier le destructuring  ===>  {}
function Button({btnColor, btnInc, children, handleClick}){
    console.log(`boutton ${children}`)
    return (
        <>
            <button onClick={() => handleClick(btnInc)} className={`btn btn-${btnColor} m-5`}>+{btnInc} %</button>
        </>
    )
}
//Appliquer la méthode memo pour l'optimisation
export default  React.memo(Button);