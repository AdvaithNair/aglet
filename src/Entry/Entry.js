import React from 'react';
import './Entry.css';

import {graphql} from 'react-apollo';

import {RECEIVE, CREATE} from './Actions.js';


class Entry extends React.Component {
    //State Machine of Text (from Item Name)
    state = {
        itemtext: ""
    };
    
    //Sets State to Updated Text from Item Name
    handleChange = (e) => {
        const newText = e.target.value;
        this.setState({
            itemtext: newText
        });
    };

    //Creates Object
    createTodo = async text => {
        await this.props.createTodo({
          variables: {
            text
          },
          refetchQueries:[{
            query: RECEIVE
          }]
        })
        this.inputName.value = '';
    }

    //HTML for Entry Form at Bottom
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
                            <button onClick = {() => this.createTodo(this.state.itemtext)}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (graphql(CREATE, {name: 'createTodo'}))(Entry);