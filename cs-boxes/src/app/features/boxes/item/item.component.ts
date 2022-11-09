import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() actionType = 'Details';
  @Input() imageLink: string | undefined;
  @Input() title: string | undefined;
  @Input() price: number | undefined;

  @Output() actionsClicked = new EventEmitter<boolean>(false);

  constructor() {}

  ngOnInit(): void {}

  onDetails() {
    this.actionsClicked.emit(true);
  }
}
