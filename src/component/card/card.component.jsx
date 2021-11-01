import React from 'react';
import './card.style.css';
export const Card = (prop) => {
    console.log(prop);
    return (
        <div className="card-container">
            <img alt= "robot" src= {`https://robohash.org/${prop.jewel.id}?set=set2&size=200x200`} />
            <h1>{prop.jewel.name}</h1>
            <p>{prop.jewel.email}</p>
        </div>
    )
}