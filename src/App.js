import './App.css';
//learn 2
import React, {Component} from 'react'
import Mom from './components/Mom'

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>Maman</h1>
        <Mom/>
        <hr/>
        <h1>Enfant</h1>
      </div>
    );  
  }
}

export default App;
