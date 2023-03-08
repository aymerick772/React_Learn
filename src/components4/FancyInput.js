import React, { useState, useRef } from 'react';

const FancyInput =  React.forwardRef( (props, ref)=>{
    const [count, setCount] = useState(0);
    const inputref = useRef()

    React.useImperativeHandle(ref, ()=>({
        focus: (val)=>{
            if(count === 4){
               const colors = ['red', 'blue', 'orange','yellow', 'pink','purple', 'green'];
                const styles = `4px solid ${colors[val]}`
                inputref.current.style.border = styles;
            }
        },
        countMax: () =>{
            if(count < 5 ){
                setCount(count + 1)
            }
        }
    }))

    return(
        <div className="">
        <h1>{count}</h1>

        <input ref={inputref}type="text"/>
        </div>
    )
})
// 

export default FancyInput;