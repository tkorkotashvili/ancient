import { Injectable } from '@angular/core';
import { Apollo, WatchQueryOptions } from 'apollo-angular';
import { GET_USER } from './user-queries';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';
import { IUser } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apollo: Apollo) {}

  getUserData(): Observable<ApolloQueryResult<WatchQueryOptions<IUser>>> {
    return this.apollo.watchQuery<WatchQueryOptions<any>>({
      query: GET_USER,
    }).valueChanges;
  }
}
