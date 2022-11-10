import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { IBoxDetailsResponse, IBoxResponse } from '../interfaces/box/box';
import { GET_BOX_DETAILS_QUERY, GET_BOXES_QUERY } from './box-queries';
import { OPEN_BOX_MUTATION } from './box-mutations';
import { IOpenBoxResponse } from '../interfaces/box-openings/box-openings';

@Injectable({ providedIn: 'root' })
export class BoxService {
  constructor(private apollo: Apollo) {}

  getBoxes(): Observable<ApolloQueryResult<IBoxResponse>> {
    return this.apollo.watchQuery<IBoxResponse>({
      query: GET_BOXES_QUERY,
    }).valueChanges;
  }

  getBoxDetails(
    id: string
  ): Observable<ApolloQueryResult<IBoxDetailsResponse>> {
    return this.apollo.watchQuery<IBoxDetailsResponse>({
      query: GET_BOX_DETAILS_QUERY(id),
    }).valueChanges;
  }

  openBox(
    boxId: string,
    amount = 1
  ): Observable<MutationResult<IOpenBoxResponse>> {
    return this.apollo.mutate<IOpenBoxResponse>({
      mutation: OPEN_BOX_MUTATION(boxId, amount),
      variables: { boxId, amount },
    });
  }
}
