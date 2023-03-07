import React, {useRef} from "react";

function Titles(){

    console.log(`componsant titre sont chargé`)

    const h1Renders = useRef(0);

    console.log(h1Renders)

    // setInterval(() =>{
    //     h1Renders.current++

    //     console.log(h1Renders.current)
    // }, 1000)
    return (
        <div className="">
            <p>{h1Renders.current}</p>
        </div>
    )
}

export default Titles;