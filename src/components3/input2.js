import react, {useRef, useState, useEffect} from 'react';

function Input2(){

    const [count, setCount ] = useState(0);
    const setIntervalRef = useRef()

    useEffect(() =>{
        setIntervalRef.current  = setInterval(() =>{
            setCount(prevCount =>{
                console.log(prevCount)
                return prevCount + 1
            },)
        }, 1000)
    },[])

  const stopIncrement = () =>{
        //Ici l'interval est répété 2 fois a cause du mode Strict de React, 
        // donc il supprime qu'un seul interval 
        clearInterval(setIntervalRef.current)
    }
    return(
        <div className="">
            <h1>{count}</h1>
            <button onClick={stopIncrement}>Stop</button>
        </div>
    )
}

export default Input2;