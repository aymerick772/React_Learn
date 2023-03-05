import React, {useReducer} from "react";

//Utilisation de useReducer 
const initiaState = 0;
const reducer = (state, action) =>{
    switch(action){
        case "increment": 
        return state + 1;
        case "decrement":
            return state - 1
        case "reinit":
            return initiaState
        default:
            return state
    }
}
function Count(){


    const [count, dispatch] = useReducer(reducer, initiaState)
    return (
        <div className="">
                <h1>{count}</h1>
                <button className="btn btn-success m-3" onClick={()=> dispatch('increment')}>+</button>
                <button className="btn btn-danger m-3" onClick={()=> dispatch('decrement')}>-</button>
                <button className="btn btn-secondary m-3" onClick={()=> dispatch('reinit')}>Reset</button>
        </div>
    )
}
export default Count; 