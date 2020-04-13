import React from 'react';
import './ListItem.css';

//HTML for a List Item (Sneaker Listing Object)
function ListItem(props) {
    return(
        <div className = "item">
            <h1>{props.name}</h1>
            <p>{props.complete.toString()}</p>
            <button onClick = {props.update} >Update</button>
            <button onClick = {props.delete} >Delete</button>
        </div>
    );
}

export default (ListItem);