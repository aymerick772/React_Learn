import react, {useRef, useState} from 'react';

function Input(){

    const [name, setName] = useState(null);
    const usernameRef = useRef(null);

    const handlerSubmit = ()=>{

        // setName({
        //     name: usernameRef.current.value
        // })
        setName(
            usernameRef.current.value
       )
            console.log(usernameRef.current.value);
            console.log(name)
        }
    console.log(usernameRef)


    return (
        <div className="">
            <p>{name}</p>
            <input ref={usernameRef} type="text" />
            <button onClick={handlerSubmit}>focus</button>
        </div>
    )
}

export default Input;