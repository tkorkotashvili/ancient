import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { IBoxDetailsResponse, IBoxResponse } from '../interfaces/box/box';
import { GET_BOX_DETAILS, GET_BOXES } from './box-queries';

@Injectable({ providedIn: 'root' })
export class BoxService {
  constructor(private apollo: Apollo) {}

  getBoxes(): Observable<ApolloQueryResult<IBoxResponse>> {
    return this.apollo.watchQuery<IBoxResponse>({
      query: GET_BOXES,
    }).valueChanges;
  }

  getBoxDetails(
    id: string
  ): Observable<ApolloQueryResult<IBoxDetailsResponse>> {
    return this.apollo.watchQuery<IBoxDetailsResponse>({
      query: GET_BOX_DETAILS(id),
    }).valueChanges;
  }
}
