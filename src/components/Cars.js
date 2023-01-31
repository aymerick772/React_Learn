import React, {Component} from "react";

const Car = (props) => {

    const colorInfo = props.color ? <p>Couleur : {props.color}</p> : (<p>Couleur : undefined</p>)
    let childInfo = '';
    if(props.children){
        childInfo = <p>Marque : {props.children}</p>;
        return (
            <div className="cars">
                {childInfo}
                {colorInfo}
                <p>Age : {props.year} ans</p>
            </div>
        )
    }else{
        childInfo = <p>Pas de données</p>;
        return (
            <div className="cars">
                {childInfo}
            </div>
        )
    }
 
}

export default Car;