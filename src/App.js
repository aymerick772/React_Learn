import './App.css';

import Count from './components/Count'
import Button from './components/Button'
import React, {useState, useCallback} from 'react'


const initialState = {
  state1: {
    value : 0,
    btnColor : 'success',
    increment : 25
  },
  state2: {
    value : 0,
    btnColor : 'danger',
    increment : 20
  },
}


function App () {
  
  
  const [count1, setCount1] = useState(initialState.state1);
  const [count2, setCount2] = useState(initialState.state2);
  

   //Méthode a utilié, pour l'optimisation et éviter de recharger tout les composants => performance
  const incrementCount1 = useCallback(
      (val) =>{
        count1.value < 100 && setCount1({...count1, value: count1.value + val});
      },[count1]
    )
  const incrementCount2= useCallback((val) =>{
    count2.value < 100 && setCount2({...count2, value: count2.value + val});
  },[count2])

    //Défault d'optimisation, a ne pas reproduire
    // const incrementCount1 = (val) =>{
    //   count1.value < 100 && setCount1({...count1, value: count1.value + val});
    // }
  // const incrementCount2= (val) =>{
  //   count2.value < 100 && setCount2({...count2, value: count2.value + val});
  // }

    return (

      <div className="container">

          
          <Count text='count1' count={count1.value} bgColor={count1.btnColor} />
          <Count text='count2' count={count2.value} bgColor={count2.btnColor} />

          <Button  handleClick={incrementCount1}btnColor={count1.btnColor} btnInc={count1.increment} >Count 1</Button>
          <Button  handleClick={incrementCount2}btnColor={count2.btnColor} btnInc={count2.increment} >Count 2</Button>
      </div>
    );  
  }

export default App;


//Note => Pour éviter la recharge inutile des componsants => Gains de performance
/////////PureComponent pour la class
///////// useCallBack pour la function