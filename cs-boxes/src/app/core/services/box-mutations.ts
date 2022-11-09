import { gql } from 'apollo-angular';

export const OPEN_BOX_MUTATION = (boxId: string, amount: number) => gql<
  any,
  { boxId: string }
>`
  mutation {
    openBox(input: {boxId: "${boxId}", amount: ${amount}}) {
      boxOpenings{
        id,
        itemValue,
        itemVariantId,
        itemVariant {
          id,
          name,
          value,
          iconUrl
        }
      }
    }
  }
`;
