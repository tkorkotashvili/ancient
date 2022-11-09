export interface IUser {
  id: string;
  name: string;
  wallets: IWallet[];
}

export interface IWallet {
  amount: string;
  currency: string;
}
