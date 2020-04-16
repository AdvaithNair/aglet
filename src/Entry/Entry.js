import React from 'react';
import './Entry.css';

import {graphql} from 'react-apollo';

import {RECEIVE, CREATE} from './Actions.js';

let currentRank = 1;



class Entry extends React.Component {
    //State Machine of Text (from Item Name)
    state = {
        itemName: "",
        itemRank: 0,
        itemPrice: 0,
        itemColor: "",
        itemOwnership: false
    };
    
    //Sets State to Updated Text from Item Name
    handleName = (e) => {
        const newName = e.target.value;
        this.setState({
            itemName: newName
        });
    };

    //Sets State to Updated Price from Item Price
    handlePrice = (e) => {
        const newPrice = e.target.value;
        this.setState({
            itemPrice: newPrice
        });
    };

    //Sets State to Updated Colorway from Item Color
    handleColor = (e) => {
        const newColor = e.target.value;
        this.setState({
            itemColor: newColor
        });
    };

    //Creates Object
    createSneaker = async (name, ranking, price, colorway, ownership) => {
        //Error Handling
        if(isNaN(price)) {
            alert("Please Enter a Floating Point Number");
            this.inputPrice.value = '';
            return;
        }
        //Creates Todo
        await this.props.createSneaker({
          variables: {
            name,
            ranking,
            price,
            colorway,
            ownership
          },
          refetchQueries:[{
            query: RECEIVE
          }]
        })
        currentRank++;
        this.inputName.value = '';
        this.inputPrice.value = '';
        this.inputColor.value = '';
    }

    //HTML for Entry Form at Bottom
    render() {
        return (
            <div>
                <div className = "over-bar"></div>
                <div className = "entry-box">
                    <div className = "elements">
                        <br />
                        <h1 className = "create-header">Add New Sneaker</h1>
                        <div className = "entry-element">
                            <label className = "entry-label">Name</label>
                            <input className = "entry-name" type = "text" onChange = {this.handleName} ref = {el => this.inputName = el}></input>
                            <br /><br />
                            <label className = "entry-label">Price</label>
                            <input className = "entry-price" type = "text" onChange = {this.handlePrice} ref = {el => this.inputPrice = el}></input>
                            <br /><br />
                            <label className = "entry-label">Colorway</label>
                            <input className = "entry-color" type = "text" onChange = {this.handleColor} ref = {el => this.inputColor = el}></input>
                            <div>
                            <button className = "create-button" onClick = {() => this.createSneaker(this.state.itemName, currentRank, parseFloat(this.state.itemPrice), this.state.itemColor, false)}>Create</button>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default (graphql(CREATE, {name: 'createSneaker'}))(Entry);