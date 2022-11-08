import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items = [1, 2, 3, 4, 5, 6];
  abc = [1, 3, 4];
}
