import React, {useState, useEffect, useMemo} from 'react'
import Profile from './Profile'

import axios from 'axios'

//Pour facilité la création d'app pour voir chaque Hooks de react, nous avons plusieur composant avec chaque app
function App2UseMemo(){

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(()=>{ 
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then((response)=>{
      // console.log(response.data);
      setProfile(response.data);
    })
    .catch(err=>{
      console.log('error')
    })
  }, [count]);


  //optimiser avec useMemo, si le count change alors 
  const isOverTen = useMemo( ()=>{
    console.log('je suis dans isOverTen')
    
    return count > 10
  }, [count])

  const goDark = ()=>{
    setDark(!dark)


    if(!dark){
      document.body.classList.add("bg-secondary");
    }else{
      document.body.classList.remove("bg-secondary");  
    }
  }

  const classBtnTheme = dark ? 'btn-light' : 'btn-dark';
  const textBtnTheme = dark ? 'rendre claire' : 'render sombre';


    return (

      <div className="container">
        <h1 className="text-center">useMemmo()</h1>

        {isOverTen && <div className="alert alert-danger" role="alert">STOP !!</div>}

        <button className="btn btn-info m-3" onClick={()=> setCount(count + 1)}>Incrémenter {count}</button>

        <button className={`btn ${classBtnTheme} m-5`} onClick={goDark}>{textBtnTheme}</button>
        
        <Profile profile={profile} count={count}/>
      </div>  
    );  
  }


export default App2UseMemo;