import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { UserService } from '../../core/services/user.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<any> | undefined;

  constructor(private apollo: Apollo, private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUserData();
  }
}
