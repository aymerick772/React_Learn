import './App.css';
import React, {Component} from 'react'
// import Todo from './components/Todo'
import ClassCount from './components2/ClassCount';
import FuncCount from './components2/FuncCount';


class App extends Component {



  render(){
    return (
      <div className="App">
        {/* <h1 className='text-center'>UseState Hooks</h1> */}
      {/* <Todo/> */}
      {/* <ClassCount/> */}
      <FuncCount/>
     
      </div>
    );  
  }
}
//test
export default App;
