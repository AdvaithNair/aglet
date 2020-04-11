import React from 'react';
import './ListItem.css';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const UpdateMutation = gql`
  mutation($id: ID!, $complete: Boolean!) {
    updateTodo(id: $id, complete: $complete)
  }
`;

function ListItem(props) {
    return(
        <div className = "item">
            <h1>{props.name}</h1>
            <p>{props.complete.toString()}</p>
            <button onClick = {props.click} >Update</button>
        </div>
    );
}

export default (graphql(UpdateMutation, {name: "updateTodo"}))(ListItem);

{/* onClick = {() => this.updateTodo(todo)} */}
