import { gql } from 'apollo-angular';

export const WALLET_UPDATES = gql`
  subscription {
    OnUpdateWallet {
      updateWallet {
        wallet {
          id
          amount
          name
        }
      }
    }
  }
`;
