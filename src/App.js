import React from 'react';

import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import Header from './Header/Header.js';
import ListItem from './List/ListItem.js';
import Entry from './Entry/Entry.js';

import {flowRight as compose} from 'lodash';

const TodosQuery = gql`
  {
    todos {
      id
      text 
      complete
    }
  }
`;

const UpdateMutation = gql`
  mutation($id: ID!, $complete: Boolean!) {
    updateTodo(id: $id, complete: $complete)
  }
`;

const RemoveMutation = gql`
  mutation($id: ID!) {
    removeTodo(id:$id)
  }
`;

class App extends React.Component {
  updateTodo = async todo => {
    await this.props.updateTodo({
      variables: {
        id: todo.id,
        complete: !todo.complete
      },
      refetchQueries:[{
        query: TodosQuery
      }]
    });
  };

  removeTodo = async todo => {
    await this.props.removeTodo({
      variables: {
        id: todo.id
      },
      refetchQueries:[{
        query: TodosQuery
      }]
    });
  };

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
                <ListItem key = {`${todo.id}-todo-item`} name = {todo.text} complete = {todo.complete} update = {() => this.updateTodo(todo)} remove = {() => this.removeTodo(todo)} />
              ))}
          </div>
        </div>
        <Entry />
      </div>
    );
  }
}

export default compose(
  graphql(TodosQuery),
  graphql(UpdateMutation, {name: 'updateTodo'}),
  graphql(RemoveMutation, {name: 'removeTodo'})
)(App);

