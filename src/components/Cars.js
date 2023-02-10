import React, {Fragment} from "react";

const Car = (props) => {

    const colorInfo = props.color ? <p>Couleur : {props.color}</p> : (<p>Couleur : undefined</p>)
    let childInfo = '';
    if(props.children){
        childInfo = <p>Marque : {props.children}</p>;
        return (
            <tr className="cars">
                <td>{childInfo}</td>
                <td>{colorInfo}</td>
                <td><p>Age : {props.year} ans</p></td>
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