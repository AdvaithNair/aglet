//Mutations for Aglet
import gql from 'graphql-tag';

//Creates Object
export const CREATE = gql`
  mutation($name: String!, $ranking: Int!, $price: Float!, $colorway: String!, $ownership: Boolean!) {
    createSneaker(name: $name, ranking: $ranking, price: $price, colorway: $colorway, ownership: $ownership){
      name
      ranking
      price
      colorway
      ownership
    }
  }
`;

//Receives Objects
export const RECEIVE = gql`
  query {
    getList{
      id
      name
      ranking
      price
      colorway
      ownership
    }
  }
`;

//Updates Object
export const UPDATE = gql`
  mutation($id: ID!, $name: String, $ranking: Int, $price: Float, $colorway: String, $ownership: Boolean) {
    updateSneaker(id: $id, name: $name, ranking: $ranking, price: $price, colorway: $colorway, ownership: $ownership)
  }
`;

//Updates Ownership of Object
export const UPDATE_OWNERSHIP = gql`
  mutation($id: ID!, $ownership: Boolean!) {
    updateOwnership(id: $id, ownership: $ownership)
  }
`;

//Updates Ranking of Object
export const UPDATE_RANKING = gql`
  mutation($id: ID!, $ranking: Int!) {
    updateRanking(id: $id, ranking: $ranking)
  }
`;

//Deletes Object
export const DELETE = gql`
  mutation($id: ID!) {
    deleteSneaker(id:$id)
  }
`;