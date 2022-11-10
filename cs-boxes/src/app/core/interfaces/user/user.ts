export interface IUser {
  currency: number;
  id: string;
  name: string;
  wallets: IWalletItem[];
}

export interface IWalletItem {
  amount: number;
}

export interface IUserResponse {
  currentUser: IUser;
}

export interface IWalletUpdateresponse {
  id: string;
  amount: string;
  name: string;
}
