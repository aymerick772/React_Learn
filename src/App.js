import './App.css';
import React, {Component} from 'react'
import Todo from './components/Todo'
import ClassCount from './components2/ClassCount';
import FuncCount from './components2/FuncCount';
import Container from './components3/Container';
import Profile from './components4/Profile';
import Count from './components5/Count';
import {UserContext, ColorContext} from './components4/MyContext';

class App extends Component {

state = {
  user : {
    name : "Lisa", 
    age : 30,
  }
}

  render(){
    return (

      <div className="App">
        {/* <h1 className='text-center'>UseState Hooks</h1> */}
      {/* <Todo/> */}
      {/* <ClassCount/> */}
      {/* <FuncCount/> */}
     {/* <Container /> component 3 */}
      {/*component 4 */}

     {/* <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value='red'>
          <Profile />
       </ColorContext.Provider>
      </UserContext.Provider> Component 4 */}
        <Count/>
      </div>
    );  
  }
}
//test
export default App;
