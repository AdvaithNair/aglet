import React from 'react';
import './ListItem.css';

function getOwnership(props) {
    if(props.ownership) {
        return "Owned";
    } else {
        return "Not Owned";
    }
}

//HTML for a List Item (Sneaker Listing Object)
function ListItem(props) {
    return(
        <div className = "item">
            <div className = "content">
                <div className = "primary-info">
                    <div className = "item-rank"><h1>{props.rank}</h1></div>
                    <h1 className = "item-name">{props.name}</h1>
                    <h1 className = "item-price">${props.price.toFixed(2)}</h1>
                    <div className = "clear-primary"></div>
                </div>
                <div className = "secondary-info">
                    <h3 className = "item-color">Colorway: {props.color}</h3>
                    <h3 className = "item-ownership">Ownership: {getOwnership(props)}</h3>
                </div>
                <button onClick = {props.update} >Update</button>
                <button onClick = {props.delete} >Delete</button>
            </div>
        </div>
    );
}

export default (ListItem);