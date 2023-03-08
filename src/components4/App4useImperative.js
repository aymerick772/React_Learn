import React, {useRef} from 'react'; 
import FancyInput from './FancyInput';


function App4useImperative(){
    const date = new Date();

    const fancyInnputRef = useRef()

    const focusInput = (val) => {

        console.log(fancyInnputRef.current)
        fancyInnputRef.current.focus(val)
        fancyInnputRef.current.countMax()
    }

    return(
        <div className="App">
            <FancyInput ref= {fancyInnputRef}/>
            <button onClick={() => focusInput(date.getDay())}>Cliquer</button>
        </div>
    )
}

export default App4useImperative;