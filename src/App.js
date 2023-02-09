import './App.css';

import React, {Component} from 'react'

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
  
      </div>
    );  
  }
}
// okokv
export default App;
