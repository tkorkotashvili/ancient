import { gql } from 'apollo-angular';

export const GET_USER = gql`
  query {
    currentUser {
      id
      name
      currency
      wallets {
        id
        amount
      }
    }
  }
`;
