import React, {useState, useEffect, useLayoutEffect} from "react";


const Layout =() =>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        //effect 
        console.log('je suis dans useEffect 1');
    }, [count])

    useLayoutEffect(()=>{
        //effect 
        console.log('je suis dans useLayoutEffect 2');
    }, [count])
    
    console.log('reder');
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Layout;