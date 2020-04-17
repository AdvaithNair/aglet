import React from 'react';
import './ListItem.css';

import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';

const editIcons = {
    edit: <EditIcon className = "in-button"/>,
    update: <CheckIcon className = "in-button"/>
}

function getOwnership(props) {
    if(props.ownership) {
        return "Owned";
    } else {
        return "Not Owned";
    }
}

//HTML for a List Item (Sneaker Listing Object)
class ListItem extends React.Component {
    state = {
        edit: true
    }

    toggleButton = () => {
        this.setState(state => ({ edit: !state.edit }))
    }
    
    getIconName = () => this.state.edit ? 'edit' : 'update'

    render(){
        const buttonType = this.getIconName();
        return(
            <div className = "item">
                <div className = "content">
                    <div className = "primary-info">
                        <div className = "item-rank"><h1>{this.props.rank}</h1></div>
                        <h1 className = "item-name">{this.props.name}</h1>
                        <h1 className = "item-price">${this.props.price.toFixed(2)}</h1>
                        <div className = "clear-primary"></div>
                    </div>
                    <div className = "secondary-info">
                        <table className = "secondary-table">
                            <tr><th>Colorway</th><td>{this.props.color}</td></tr>
                            <tr><th>Ownership</th><td>{getOwnership(this.props)}</td></tr>
                            <button className = "update-button" onClick = {this.props.update} >Update Ownership</button>
                        </table>
                        <table className = "button-array">
                            <tr><td><button className = "list-button"><ExpandLessIcon className = "in-button"/></button></td>
                                <td><button id = "edit" className = "list-button" onClick = {this.toggleButton}>{editIcons[buttonType]}</button></td></tr>
                            <tr><td><button className = "list-button"><ExpandMoreIcon className = "in-button"/></button></td>
                                <td><button className = "list-button" onClick = {this.props.delete}><CloseIcon className = "in-button"/></button></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}

export default (ListItem);