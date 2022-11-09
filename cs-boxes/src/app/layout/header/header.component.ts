import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { UserService } from '../../core/services/user.service';
import { IUser } from '../../core/interfaces/user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUserData: IUser = <IUser>{};
  loading = false;

  constructor(private apollo: Apollo, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserData().subscribe((userData) => {
      this.currentUserData = userData.data.currentUser;
      this.loading = userData.loading;
    });
  }
}
