import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER } from './user-queries';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { IBoxResponse } from '../interfaces/box/box';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apollo: Apollo) {}

  getUserData(): Observable<ApolloQueryResult<IBoxResponse>> {
    return this.apollo.watchQuery<IBoxResponse>({
      query: GET_USER,
    }).valueChanges;
  }
}
