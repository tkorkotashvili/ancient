import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseSubscriptionClass } from '../../../core/utils/base-subscription';
import { BoxService } from '../../../core/services/box.service';
import { INode } from '../../../core/interfaces/box/box';
import { map, Observable, of } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends BaseSubscriptionClass implements OnInit {
  boxItems$: Observable<INode[]> = of([]);
  items: INode[] = [];
  loading = true;

  constructor(private boxService: BoxService) {
    super();
  }

  ngOnInit() {
    this.boxItems$ = this.boxService.getBoxes().pipe(
      map((res) => {
        return res.data.boxes.edges;
      })
    );
  }
}
