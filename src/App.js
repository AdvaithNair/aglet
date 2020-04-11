import React from 'react';

import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import ListItem from './List/ListItem.js';
import Header from './Header/Header.js';

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

class App extends React.Component {
  updateTodo = async todo => {
    await this.props.updateTodo({
      variables: {
        id: todo.id,
        name: todo.name + " updated",
        complete: !todo.complete
      }
    })
  };

  removeTodo = todo => {

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
              {/*{todos.map(todo => (<div key = {`${todo.id}-todo-item`}>{todo.text}</div>))}*/}
              {todos.map(todo => (
                <ListItem name = {todo.text} complete = {todo.complete} click = {() => this.updateTodo(todo)}/>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(TodosQuery),
  graphql(UpdateMutation, {name: "updateTodo"})
)(App);

