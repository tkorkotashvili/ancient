import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER } from './user-queries';
import { Observable } from 'rxjs';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { IUserResponse, IWalletUpdateresponse } from '../interfaces/user';
import { WALLET_UPDATES } from './user-subscriptions';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apollo: Apollo) {}

  getUserData(): Observable<ApolloQueryResult<IUserResponse>> {
    return this.apollo.watchQuery<IUserResponse>({
      query: GET_USER,
    }).valueChanges;
  }

  walletUpdateSubscription(): Observable<FetchResult<IWalletUpdateresponse>> {
    return this.apollo.subscribe<IWalletUpdateresponse>({
      query: WALLET_UPDATES,
    });
  }
}
