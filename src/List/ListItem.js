import React from 'react';
import './ListItem.css';

import {RECEIVE, UPDATE} from './../Actions.js';

import {graphql} from 'react-apollo';

//Material Icons
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';import CancelIcon from '@material-ui/icons/Cancel'; 


//HTML for a List Item (Sneaker Listing Object)
class ListItem extends React.Component {
    //State Machine
    state = {
        edit: true,
        itemName: this.props.sneaker.name,
        itemRank: this.props.sneaker.ranking,
        itemPrice: this.props.sneaker.price,
        itemColor: this.props.sneaker.colorway,
        itemOwnership: this.props.sneaker.ownership
    }

    //Updates Edit Values
    updateSneaker = async (id, name, ranking, price, colorway, ownership) => {
        if(!this.state.edit) {
            //Error Handling: Ensures Name Has Value
            if(name === "") {
                name = this.props.sneaker.name;
            }

            //Error Handling: Ensures Price is a Float
            if(isNaN(price)) {
                alert("Please Update With a Floating Point Number");
                return;
            }

            //Error Handling: Ensures Colorway Has Value
            if(colorway === "") {
                colorway = this.props.sneaker.colorway;
            }

            //Updates Sneaker
            await this.props.updateSneaker({
                variables: {
                    id,
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
        }
    }

    //Toggles Button (Sets State and Calls Edit Function)
    toggleButton = () => {
        this.setState(state => ({ 
            edit: !state.edit
        }))
        this.updateSneaker(this.props.sneaker.id, this.state.itemName, this.state.itemRank, 
            parseFloat(this.state.itemPrice), this.state.itemColor, this.state.itemOwnership);
    }
    
    //Returns Icon for Edit Button (Changes to Update When Necessary)
    getEditIcon = () => {
        if(this.state.edit) {
            return <EditIcon className = "in-button"/>;
        } else {
            return <CheckIcon className = "in-button"/>;
        }
    }

    //Gets Ownership Icon (Check for Owned, X for Not Owned)
    getOwnership = () => {
        if(this.props.sneaker.ownership) {
            return <CheckCircleIcon />;
        } else {
            return <CancelIcon />;
        }
    }

    //Gets HTML Element for Name
    getNameElement = () => {
        if(this.state.edit) {
            return <h1 className = "item-name">{this.props.sneaker.name}</h1>;
        } else {
            return <input className = "edit-name" onChange = {this.handleName} ref = {el => this.inputName = el}></input>;
        }
    }

    //Sets State to Updated Text from Item Name
    handleName = (e) => {
        const newName = e.target.value;
        this.setState({
            itemName: newName
        });
    };

    //Gets HTML Element for Price
    getPriceElement = () => {
        if(this.state.edit) {
            return <h1 className = "item-price">${this.props.sneaker.price.toFixed(2)}</h1>;
        } else {
            return <input className = "edit-price" onChange = {this.handlePrice} ref = {el => this.inputPrice = el}></input>;
        }
    }

    //Sets State to Updated Text from Item Price
    handlePrice = (e) => {
        const newPrice = e.target.value;
        this.setState({
            itemPrice: newPrice
        });
    };

    //Gets HTML Element for Colorway
    getColorwayElement = () => {
        if(this.state.edit) {
            return this.props.sneaker.colorway;
        } else {
            return <input className = "edit-color" onChange = {this.handleColor} ref = {el => this.inputColor = el}></input>
        }
    }

    //Sets State to Updated Text from Item Color
    handleColor = (e) => {
        const newColor = e.target.value;
        this.setState({
            itemColor: newColor
        });
    };

    //Renders HTML for ListItem
    render(){
        return(
            <div className = "item">
                <div className = "content">
                    <div className = "primary-info">
                        <div className = "item-rank"><h1>{this.props.sneaker.ranking}</h1></div>
                        <div>{this.getNameElement()}</div>
                        <div>{this.getPriceElement()}</div>
                        <div className = "clear-primary"></div>
                    </div>
                    <div className = "secondary-info">
                        <table className = "secondary-table">
                            <tr><th>Colorway</th><td>{this.getColorwayElement()}</td></tr>
                            <tr><th>Owned</th><td>{this.getOwnership()}</td></tr>
                            <button className = "update-button" onClick = {this.props.updateOwnership} >Update Ownership</button>
                        </table>
                        <table className = "button-array">
                            <tr><td><button className = "list-button"><ExpandLessIcon className = "in-button"/></button></td>
                                <td><button id = "edit" className = "list-button" onClick = {this.toggleButton}>{this.getEditIcon()}</button></td></tr>
                            <tr><td><button className = "list-button"><ExpandMoreIcon className = "in-button"/></button></td>
                                <td><button className = "list-button" onClick = {this.props.delete}><CloseIcon className = "in-button"/></button></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}

export default (graphql(UPDATE, {name: 'updateSneaker'}))(ListItem);