import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BoxService } from '../../../core/services/box.service';
import { ActivatedRoute } from '@angular/router';
import { IBoxDetails } from '../../../core/interfaces/box/box';
import { BaseSubscriptionClass } from '../../../core/utils/base-subscription';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { IPrizeItem } from '../../../core/interfaces/box/box-openings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent extends BaseSubscriptionClass {
  boxDetails$: Observable<IBoxDetails> | undefined;
  boxOpenLoading = false;
  prizeItems$ = new BehaviorSubject<IPrizeItem[] | undefined>(undefined);

  constructor(
    private boxService: BoxService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    super();
    // this.prizeItems$.pipe(
    //   tap((prizeItem) => (this.boxOpenLoading = !prizeItem))
    // );
  }

  onNavigateHome() {}

  ngOnInit() {
    this.boxDetails$ = this.boxService
      .getBoxDetails(this.route.snapshot.params['id'])
      .pipe(map((res) => res.data.box));
  }

  onOpenBox(boxId: string) {
    this.boxOpenLoading = true;
    this.subscriptions$.push(
      this.boxService
        .openBox(boxId, 1)
        .pipe(
          finalize(() => {
            this.boxOpenLoading = false;
          })
        )
        .subscribe((res) => {
          console.log('res', res);
          this.prizeItems$.next(res.data?.openBox.boxOpenings);
          this.toastr.success('WINNER!WINNER!CHICKEN DINNER!');
        })
    );
  }
}
