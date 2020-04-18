import React from 'react';

import {graphql} from 'react-apollo';
import {RECEIVE, UPDATE_OWNERSHIP, DELETE} from './Actions.js';

import Header from './Header/Header.js';
import ListItem from './List/ListItem.js';
import Entry from './Entry/Entry.js';

import {flowRight as compose} from 'lodash';

//Main App
class App extends React.Component {
  //Updates Ownership (swaps ownership boolean and updates)
  updateOwnership = async (sneaker) => {
    await this.props.updateOwnership({
      variables: {
        id: sneaker.id,
        ownership: !sneaker.ownership
      },
      refetchQueries:[{
        query: RECEIVE
      }]
    });
  };

  //Deletes Sneaker (deletes from database and updates)
  deleteSneaker = async (sneaker) => {
    await this.props.deleteSneaker({
      variables: {
        id: sneaker.id
      },
      refetchQueries:[{
        query: RECEIVE
      }]
    });
  };

  //Renders App
  render() {
    console.log(this.props);
    const {data: {loading, getList}} = this.props;

    if (loading) {
      return null;
    }

    return (
      <div>
        <Header />
        <div style = {{display: "flex"}}>
          <div style = {{margin: "auto", width: "80%"}}>
            {getList.map(sneaker => (
                <ListItem key = {`${sneaker.id}-item`} sneaker = {sneaker} 
                updateOwnership = {() => this.updateOwnership(sneaker)} 
                delete = {() => this.deleteSneaker(sneaker)} />
            ))}
          </div>
        </div>
        <Entry />
      </div>
    );
  }
}

//Exports Packages
export default compose(
  graphql(RECEIVE),
  graphql(UPDATE_OWNERSHIP, {name: 'updateOwnership'}),
  graphql(DELETE, {name: 'deleteSneaker'})
)(App);

