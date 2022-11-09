import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BoxService } from '../../../core/services/box.service';
import { INode } from '../../../core/interfaces/box/box';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  boxItems$: Observable<INode[]> = of([]);
  items: INode[] = [];
  loading = true;

  constructor(private boxService: BoxService, private router: Router) {}

  ngOnInit() {
    this.boxItems$ = this.boxService.getBoxes().pipe(
      map((res) => {
        return res.data.boxes.edges;
      })
    );
  }

  onDetails(id: string) {
    this.router.navigate(['boxes', id]);
  }
}
