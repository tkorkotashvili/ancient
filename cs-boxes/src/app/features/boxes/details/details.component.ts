import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BoxService } from '../../../core/services/box.service';
import { ActivatedRoute } from '@angular/router';
import { IBoxDetails } from '../../../core/interfaces/box/box';
import { BaseSubscriptionClass } from '../../../core/utils/base-subscription';
import { map, Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent extends BaseSubscriptionClass {
  boxDetails$: Observable<IBoxDetails> | undefined;

  constructor(private boxService: BoxService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.boxDetails$ = this.boxService
      .getBoxDetails(this.route.snapshot.params['id'])
      .pipe(map((res) => res.data.box));
  }
}
