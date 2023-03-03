import React, {useState, useEffect} from "react";

function FuncCount () {
const [count, setCount ] = useState(0);
const [name, setName ] = useState('');


useEffect(() =>{
    console.log('maj titr');
    setTimeout(()=>{
        document.title = `count : ${count}`
    }, 2000)
    //le [count] sert ne pas executer la fonction useEffect si le count reste le même
}, [count])




    return (
        <div className="">
            <h1>Count {count}</h1>
            <button onClick={()=> setCount(count + 1)}> Cliquer</button>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
    )
}

export default FuncCount;