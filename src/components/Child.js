import React from "react";

const Child = (props) =>{

    // if(props.lesState.messageMom){
    //     // props.lesState.messageToto = "OMG"  <== Ce que j'ai pensé a faire mdr
    // }
    const btnShow = props.lesState.messageMom ?  <button onClick={props.repChild}>Reponse de {props.name}</button> :  <button disabled>Reponse de {props.name}</button>
    
    // console.log(props.lesState)
    return (
        <div className="">
            <h1>Je suis {props.name}</h1>
            {btnShow}
            <p>{props.lesState.messageToto}</p>
            
        </div>
    )
}


export default Child;