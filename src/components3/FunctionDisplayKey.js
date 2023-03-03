import React, {useState, useEffect} from 'react';

function FunctionDisplayKey(){
        const [keyCode, setKeyCode] = useState('');


        const handleKeyCode = (e) =>{
            setKeyCode(e.code)
            console.log('addEvent Activé');
        }
        //reproduction de ComponentDidMount
        useEffect(()=>{
            document.addEventListener('keyup', handleKeyCode)

            //pour reproduire le ComponentWillUnmount
            return () =>{
                console.log('addEvent Desactivé');
                document.removeEventListener('keyup', handleKeyCode)            
                
            }
        }, [])


    return(
        <div className="card ">
            <div className="card-body">
                <h1>{keyCode}</h1>
            </div>
    </div>
    )
}


export default FunctionDisplayKey;