import React from 'react';

import {graphql} from 'react-apollo';
import {RECEIVE, UPDATE, DELETE} from './Entry/Actions.js';

import Header from './Header/Header.js';
import ListItem from './List/ListItem.js';
import Entry from './Entry/Entry.js';

import {flowRight as compose} from 'lodash';

//Main App
class App extends React.Component {
  //Updates Sneaker (swaps complete Boolean value and updates)
  updateSneaker = async (sneaker) => {
    await this.props.updateSneaker({
      variables: {
        id: sneaker.id,
        name: sneaker.name,
        ranking: sneaker.ranking,
        price: sneaker.price,
        colorway: sneaker.colorway,
        ownership: sneaker.ownership
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
                <ListItem key = {`${sneaker.id}-item`} rank = {sneaker.ranking} name = {sneaker.name} price = {sneaker.price} color = {sneaker.colorway} ownership = {sneaker.ownership} update = {() => this.updateSneaker(sneaker)} delete = {() => this.deleteSneaker(sneaker)} />
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
  graphql(UPDATE, {name: 'updateSneaker'}),
  graphql(DELETE, {name: 'deleteSneaker'})
)(App);

