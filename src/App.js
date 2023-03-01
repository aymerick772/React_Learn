import './App.css';
import React, {Component} from 'react'
import ClassState from './components/ClassState';
import FunctState from './components/FunctState';

class App extends Component {



  render(){
    return (
      <div className="App">
        <h1 className='text-center'>UseState Hooks</h1>
        <ClassState/>
        <hr />
        <FunctState/>
      </div>
    );  
  }
}
//test
export default App;
