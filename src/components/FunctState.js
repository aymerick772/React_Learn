import React, {useState} from "react";


//useState est une façon pour avoir un state sans avoir a utilié les class
const FunctState = () =>{
    //Comment faire si on a un objet ?
   const [counter, setCounter] = useState(0);

   console.log(counter);

//    Comme dans la class, cette methode n'es pas la meilleur
//    const addOne = () =>{
//     setCounter(counter + 1)
//    }
// Priviligié cette metode =>
   const addOne = () =>{
    setCounter(prevCounter =>( 
        prevCounter + 1
        ))
   }

    return (
        <div className="">
             <p>funcState : {counter}</p>
            <button onClick={addOne}>Façon basic </button> 
            
            <p>Même résultat optimisé : </p>
            <button onClick={ () => setCounter(prevCounter => prevCounter + 1)}>Button + 1</button>
        </div>
    )
}

export default FunctState;