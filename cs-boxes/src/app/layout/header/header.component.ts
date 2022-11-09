import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Apollo, WatchQueryOptions } from 'apollo-angular';
import { Observable } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { IUser } from '../../core/interfaces/user/user';
import { ApolloQueryResult } from '@apollo/client';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<ApolloQueryResult<WatchQueryOptions<IUser>>> | undefined;

  constructor(private apollo: Apollo, private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUserData();
  }
}
