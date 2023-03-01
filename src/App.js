import './App.css';
import React, {Component} from 'react'
import Todo from './components/Todo'
class App extends Component {



  render(){
    return (
      <div className="App">
        {/* <h1 className='text-center'>UseState Hooks</h1> */}
      <Todo/>
     
      </div>
    );  
  }
}
//test
export default App;
