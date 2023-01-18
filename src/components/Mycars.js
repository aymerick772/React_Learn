import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {

    noCopy = () =>{
        alert('Merci de ne pas copier mon text Por Favor.')
    }
    addStyleH1 = (e) =>{
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled')
        }else{
            e.target.classList.add('styled')

        }
    }

render(){
    console.log(this)
    return(
        <div>
            <h1 onMouseOver={this.addStyleH1} >{this.props.title}</h1>
            <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veritatis.</p>
            <Car color='red'>
                Ford
            </Car>
            <Car color='Black'></Car>
            <Car >Chevrolet</Car>
        </div>
    )
}
}

export default Mycars;