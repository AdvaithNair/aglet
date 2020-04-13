import React from 'react';
import './ListItem.css';

function ListItem(props) {
    return(
        <div className = "item">
            <h1>{props.name}</h1>
            <p>{props.complete.toString()}</p>
            <button onClick = {props.update} >Update</button>
            <button onClick = {props.remove} >Remove</button>
        </div>
    );
}

export default (ListItem);