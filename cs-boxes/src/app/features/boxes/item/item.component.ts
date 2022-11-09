import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() imageLink: string | undefined;
  @Input() title: string | undefined;
  @Input() price: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
