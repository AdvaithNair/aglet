import React from 'react';

import {graphql} from 'react-apollo';
import {RECEIVE, UPDATE, DELETE} from './Entry/Actions.js';

import Header from './Header/Header.js';
import ListItem from './List/ListItem.js';
import Entry from './Entry/Entry.js';

import {flowRight as compose} from 'lodash';

//Main App
class App extends React.Component {
  //Updates Todo (swaps complete Boolean value and updates)
  updateTodo = async (todo) => {
    await this.props.updateTodo({
      variables: {
        id: todo.id,
        complete: !todo.complete
      },
      refetchQueries:[{
        query: RECEIVE
      }]
    });
  };

  //Deletes Todo (deletes from database and updates)
  deleteTodo = async todo => {
    await this.props.deleteTodo({
      variables: {
        id: todo.id
      },
      refetchQueries:[{
        query: RECEIVE
      }]
    });
  };

  //Renders App
  render() {
    const {data: {loading, todos}} = this.props;
    if (loading) {
      return null;
    }
    return (
      <div>
        <Header />
        <div style = {{display: "flex"}}>
          <div style = {{margin: "auto", width: "80%"}}>
              {todos.map(todo => (
                <ListItem key = {`${todo.id}-todo-item`} name = {todo.text} complete = {todo.complete} update = {() => this.updateTodo(todo)} delete = {() => this.deleteTodo(todo)} />
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
  graphql(UPDATE, {name: 'updateTodo'}),
  graphql(DELETE, {name: 'deleteTodo'})
)(App);

