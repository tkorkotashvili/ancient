import { Injectable } from '@angular/core';
import { Apollo, WatchQueryOptions } from 'apollo-angular';
import { GET_USER } from './user-queries';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apollo: Apollo) {}

  getUserData() {
    return this.apollo.watchQuery<WatchQueryOptions<any>>({
      query: GET_USER,
    }).valueChanges;
  }
}
