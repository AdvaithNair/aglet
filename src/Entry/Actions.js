//Mutations for Aglet
import gql from 'graphql-tag';

//Creates Object
export const CREATE = gql`
  mutation($text: String!) {
    createTodo(text: $text) {
      text
      id
      complete
    }
  }
`;

//Receives Objects
export const RECEIVE = gql`
{
  todos {
    id
    text 
    complete
  }
}
`;

//Updates Object
export const UPDATE = gql`
  mutation($id: ID!, $complete: Boolean!) {
    updateTodo(id: $id, complete: $complete)
  }
`;

//Deletes Object
export const DELETE = gql`
  mutation($id: ID!) {
    removeTodo(id:$id)
  }
`;