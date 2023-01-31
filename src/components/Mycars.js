import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {

    state = {
        voitures: [
            {name : 'Ford', color : 'red', year:'2000'},
            {name : 'Merco', color : 'cyan', year:'1980'},
            {name : 'BMW', color : 'blue', year:'2008'},
        ],
    }

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
    addTenYears = () =>{
        console.log('activé')
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        });
        this.setState({
            updatedState
        })
    }

render(){
    // console.log(this)
    const year = new Date().getFullYear();
    return(
        <div>
            <h1 onMouseOver={this.addStyleH1} >{this.props.title}</h1>
            <button onClick={this.addTenYears}>+ 10 ans</button>
            <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veritatis.</p>
            {/* <Car color={this.state.voitures[0].color} year ={year - this.state.voitures[0].year}>{this.state.voitures[0].name}</Car>
            <Car color={this.state.voitures[1].color} year ={year - this.state.voitures[1].year}>{this.state.voitures[1].name}</Car>
            <Car color={this.state.voitures[2].color} year ={year - this.state.voitures[2].year}>{this.state.voitures[2].name}</Car> */}
            {
                this.state.voitures.map((voiture, index) =>{
                    return (
                        <Car key={index} color={voiture.color} year={year -voiture.year} >{voiture.name}</Car>
                    )
                })
            }
        </div>
    )
}
}

export default Mycars;