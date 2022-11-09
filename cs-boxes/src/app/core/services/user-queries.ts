import { gql } from 'apollo-angular';
import { UserQueryType } from '../interfaces/user/user-qury-type';

export const GET_USER = gql<undefined, UserQueryType>`
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
