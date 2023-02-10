import React, {Fragment} from "react";

const Car = (props) => {

    const colorInfo = props.color ? `Couleur : ${props.color}` : (`Couleur : undefined`)
    let childInfo = '';
    if(props.children){
        childInfo = `Marque : ${props.children}`;
        return (
            <tr className="cars">
                <td>{childInfo}</td>
                <td><p>Age : {props.year} ans</p></td>
                <td>{colorInfo}</td>
            </tr>
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