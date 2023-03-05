import React from "react";


const Count =({text, count , bgColor}) => {
    console.log(`pourcentage premier conteur ${text}`)

    const progress = {
        width : `${count}%`
    }
    return (
        <>
            <p className="h1">{count} %</p>

            <div className="progress">
                <div className={`progress-bar bg-${bgColor} progress-bar-striped`} role="progressbar" style={progress}>

                </div>
            </div>
        </>
    )
}
//Appliquer la méthode memo pour l'optimisation
export default  React.memo(Count);