import React from 'react';
import './Entry.css';

import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const TodosQuery = gql`
  {
    todos {
      id
      text 
      complete
    }
  }
`;

const CreateMutation = gql`
  mutation($text: String!) {
    createTodo(text: $text) {
      text
      id
      complete
    }
  }
`;

class Entry extends React.Component {
    state = {
        text: ""
    };
    
    handleChange = (e) => {
        const newText = e.target.value;
        this.setState({
            text: newText
        });
    };

    createTodo = async text => {
        await this.props.createTodo({
          variables: {
            text
          },
          refetchQueries:[{
            query: TodosQuery
          }]
        })
        this.inputName.value = '';
    }

    render() {
        return (
            <div>
                <div className = "over-bar"></div>
                <div className = "entry-box">
                    <div className = "elements">
                        <h1 className = "create-header">Create</h1>
                        <label>Item Name</label>
                        <input className = "item-name" type = "text" onChange = {this.handleChange} ref = {el => this.inputName = el}></input>
                        <div className = "create-button">
                            <button onClick = {() => this.createTodo(this.state.text)}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (graphql(CreateMutation, {name: 'createTodo'}))(Entry);