import React, {useState, useRef, useEffect, useLayoutEffect} from "react";

import Content from './Content'
function Box (){
    
    const boxRef = useRef(null)
    const [height, setHeight] = useState(100)
    

    // La différence entre useEffect et useLayoutEffect est que 
    // useLayoutEffect s'effectue au même moment que la page se charge
    // Alors que useEffect se charge après que la page se charge 


    // useEffect(() =>{
    //     // console.log(boxRef.current.getBoundingClientRect())
    //     if(boxRef.current.getBoundingClientRect().height < 150){
    //         setHeight(height + 100)
            
    //         console.log(`attendre${performance.now() - refPerf.current}`);
    //     }
    // }, [height])

    useLayoutEffect(() =>{
        // console.log(boxRef.current.getBoundingClientRect())
        if(boxRef.current.getBoundingClientRect().height < 150){
            setHeight(height + 100)

            console.log(`attendre${performance.now() - refPerf.current}`);
        }
    }, [height])

    const refPerf = useRef(0)

    refPerf.current = performance.now()

    const boxStyle = {
        width : '400px',
        height: `${height}px`, 
        margin : '0 auto',
        backgroundColor : 'red'
    }
    return (
        <div ref={boxRef} className="" style={boxStyle}>
            {`height : ${height}px`}
            <Content/>
        </div>
    )
}

export default Box;