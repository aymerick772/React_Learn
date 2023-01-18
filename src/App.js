import './App.css';

import React, {Component} from 'react'
import Mycars from './components/Mycars';

class App extends React.Component {

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

  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
        <button onClick={this.changeTitle}> changer le nom en dure</button>
        <button onClick={() => this.changeViaParam("title via le param")}> changer le nom dynamique</button>
        <button onClick={this.changeViaBind.bind(this, "nouveau titre via bind")}> changer le nom via bind</button>
        {/* <input type="text" onChange={this.changeViaBind.bind(this, "value")}/> */}
      </div>
    );  
  }
}

export default App;
