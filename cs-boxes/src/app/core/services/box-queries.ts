import { gql } from 'apollo-angular';
import { BoxesQueryType } from '../interfaces/box/box-query-type';

export const GET_BOXES_QUERY = gql<
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

export const GET_BOX_DETAILS_QUERY = (id: string) => gql<
  { free: boolean; purchasable: boolean; openable: boolean },
  BoxesQueryType
>`
  query {
    box(id: "${id}") {
      id
      name
      iconUrl
      price
      currency
    }
  }
`;
