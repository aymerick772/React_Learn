import React, {useState, useEffect} from "react";

function FuncCount () {
const [count, setCount ] = useState(0);
useEffect(() =>{
    setTimeout(()=>{
        document.title = `count : ${count}`
    }, 2000)
})


    return (
        <div className="">
            <h1>Count {count}</h1>
            <button onClick={()=> setCount(count + 1)}> Cliquer</button>
        </div>
    )
}

export default FuncCount;