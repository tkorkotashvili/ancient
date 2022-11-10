import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { UserService } from '../../core/services/user.service';
import { IUser } from '../../core/interfaces/user';
import { Subscription } from 'rxjs';
import { BaseSubscriptionClass } from '../../core/utils/base-subscription';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseSubscriptionClass implements OnInit {
  currentUserData: IUser = <IUser>{};
  loading = false;
  userQuery$: Subscription | undefined;

  constructor(private apollo: Apollo, private userService: UserService) {
    super();
  }

  ngOnInit() {
    this.subscriptions$.push(
      (this.userQuery$ = this.userService
        .getUserData()
        .subscribe((userData) => {
          this.currentUserData = userData.data.currentUser;
          this.loading = userData.loading;
        })),
      this.userService.walletUpdateSubscription().subscribe(
        (res: any) => console.log('WalletUpdate', res),
        (error) => console.log('WalletUpdateError', error)
      )
    );
  }
}
