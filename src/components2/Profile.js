import React from 'react';

function Profile({count, profile}){
    console.log('je suis dans le profile');
    return(
        <div className="">
            <ul className="list-group">
                <li className="list-group-item"><p className="h2">User Id : {count} </p></li>
                <li className="list-group-item">Nom : {profile.name}</li>
                <li className="list-group-item">Prénom : {profile.username} </li>
                <li className="list-group-item">Email : {profile.email}</li>
                <li className="list-group-item">Phone : {profile.phone}</li>
            </ul>
        </div>
    )
}

export default React.memo(Profile);