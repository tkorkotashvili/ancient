import { IWalletItem } from './user';

export type UserQueryType = {
  id: string;
  name: string;
  wallets: IWalletItem[];
};
