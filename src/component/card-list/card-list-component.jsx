import React from 'react';
import '../card-list/card-list-style.css'
import { Card } from '../card/card.component';

export const CardList = (prop) => {
    return(
        <div className = "card-list">
           {
               prop.monster.map(data => 
                    <Card key = {data.id} jewel = {data} />
                    //here jewel is object name in card component
                    //key needs for indicate that each component is unique
                )
           }
        </div>
    );
}