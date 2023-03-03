import React, { Component } from 'react';


class ClassCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        console.log('je suis dans con')
        document.title = `Count ${this.state.count}`
    }
    handlerClick = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidUpdate(prevProps, prevState){
        document.title = `Count ${this.state.count}`

    }

    render() {
        return (
            <div className="">
                <h1>{this.state.count}</h1>
                <button onClick={this.handlerClick}>Cliquer</button>
            </div>
        )
    }
}

export default ClassCount;