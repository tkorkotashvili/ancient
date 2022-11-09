import { gql } from 'apollo-angular';
import { UserQueryType } from '../interfaces/user/user-qury-type';

export const GET_BOXES = gql<
  { free: boolean; purchasable: boolean; openable: boolean },
  UserQueryType
>`
  query {
    boxes(free: false, purchasable: true, openable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
        }
      }
    }
  }
`;
