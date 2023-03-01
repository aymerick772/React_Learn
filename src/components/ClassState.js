import React, {Component} from "react";


class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
        }
    }

    ////Methode 1 , pas recommandé
    // AddOne = (e) =>{
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    ////Méthode 2, recommandé
    AddOne = (e) =>{
        // console.log(e);
        this.setState((prevState)=>{
            console.log(prevState)
            return{
                counter: prevState.counter + 1
            }

        })
    }
    render() {
        return(
            <div className="">
                <p>ClassState : {this.state.counter}</p>
                <button onClick={this.AddOne}>Ajouter +</button>
            </div>
        )
    }
}

export default ClassState; 