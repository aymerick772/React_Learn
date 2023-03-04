import React, {useReducer} from "react";

//Utilisation de useReducer 
const initiaState = {
    count1 :0, 
    count2 : 0
};
const reducer = (state, action) =>{

    switch(action.type){
        case "increment": 
        return {...state, count1 : state.count1 + action.value}
        case "decrement":
            return {...state, count1 : state.count1 - action.value}
        case "increment2": 
        return {...state, count2 : state.count2 + action.value}
        case "decrement2":
            return {...state, count2 : state.count2 - action.value}
        case "reinit":
            return initiaState
        default:
            return state
    }
}
function ObjCount(){


    const [count, dispatch] = useReducer(reducer, initiaState)
    return (
        <div className="row">

            <div className="col">
                <h1>{count.count1}</h1>
                <button className="btn btn-success m-3" onClick={()=> dispatch({type:'increment', value: 1})}>+</button>
                <button className="btn btn-danger m-3" onClick={()=> dispatch({type:'decrement', value: 1})}>-</button>
            </div>

            <div className="col-6">
                <button className="btn btn-secondary m-3" onClick={()=> dispatch({type:'reinit'})}>Reset</button>
            </div>
            
            <div className="col">
                <h1>{count.count2}</h1>
                <button className="btn btn-success m-3" onClick={()=> dispatch({type:'increment2', value: 103})}>+</button>
                <button className="btn btn-danger m-3" onClick={()=> dispatch({type:'decrement2', value: 103})}>-</button>
            </div>
            
        </div>
    )
}
export default ObjCount; 