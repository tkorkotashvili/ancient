import type { OnDestroy } from '@angular/core';
import { Directive } from '@angular/core';
import type { Subscription, SubscriptionLike } from 'rxjs';

@Directive()
export class BaseSubscriptionClass implements OnDestroy {
  subscriptions: VoidFunction[] = [];
  subscriptions$: (Subscription | SubscriptionLike)[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach((unsubscribe: VoidFunction) => {
      unsubscribe();
    });

    this.subscriptions$.forEach(
      (subscription: Subscription | SubscriptionLike) => {
        subscription.unsubscribe();
      }
    );
  }
}
