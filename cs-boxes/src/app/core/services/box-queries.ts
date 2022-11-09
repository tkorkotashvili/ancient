import { gql } from 'apollo-angular';
import { BoxesQueryType } from '../interfaces/box/box-query-type';

export const GET_BOXES = gql<
  { free: boolean; purchasable: boolean; openable: boolean },
  BoxesQueryType
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
