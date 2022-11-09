import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER } from './user-queries';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { IUserResponse } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apollo: Apollo) {}

  getUserData(): Observable<ApolloQueryResult<IUserResponse>> {
    return this.apollo.watchQuery<IUserResponse>({
      query: GET_USER,
    }).valueChanges;
  }
}
