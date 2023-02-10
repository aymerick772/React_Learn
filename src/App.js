import './App.css';

import React, {Component} from 'react'
import Mycars from './components/Mycars';

class App extends Component {

  state = {
    titre : 'Mon catalogue voiture'
  }
  changeTitle =  (e)=>{
    // console.log(e.target + 'corectemennt appeler la function' + e.props);
    this.setState({
      titre: "Mon nouveau titre"})
  }
  changeViaParam = (titre) => {
    this.setState({
      titre: titre
    })
  }
  changeViaBind = (bind) => {
    this.setState({
      titre: bind
    })
  }

  changeViaInput = (e) =>{
    this.setState({
      titre: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
        <button onClick={this.changeTitle}> changer le nom en dure</button>
        <button onClick={() => this.changeViaParam("title via le param")}> changer le nom dynamique</button>
        <button onClick={this.changeViaBind.bind(this, "nouveau titre via bind")}> changer le nom via bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    );  
  }
}
//test
export default App;
