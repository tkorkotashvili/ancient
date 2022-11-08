import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
