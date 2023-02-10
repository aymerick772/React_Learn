import React, { Component } from "react";
import Child from  "./Child";

class Mom extends Component {
    state = {
        messageMom : null,
        messageToto: null,
    }
    ordreMom = () =>{
        this.setState({
            messageMom: "Va ranger ta chambre"
        })
    }
    repChild = () =>{
        this.setState({
            messageToto: "D'accord je vais ranger .."
        })
    }
    render() {
        return(
            <div className="">
                <h1>Maman</h1>
                <button onClick={this.ordreMom}>Ordre de la mère</button>
                <p>{this.state.messageMom}</p>
                <hr/>
                <Child name="toto" lesState={this.state}  repChild={this.repChild}></Child>
            </div>
        )
    }
}
//test push contribution .
export default Mom;