import React,{useState} from "react";

import ClassContainer from './ClassContainer';
import FunctionDisplayKey from './FunctionDisplayKey';


function Container (){

const [show, setShow] = useState(true);

   const btnDisplay = show ? 'cacher' : "Afficher";

    
    return(
        <div className="">

            <button className="btn btn-primary m-3" onClick={() => setShow(!show)}>{btnDisplay}</button>

            {
                // show && <ClassContainer/>;

                show && <FunctionDisplayKey />

            }

        </div>
    )
}

export default Container;