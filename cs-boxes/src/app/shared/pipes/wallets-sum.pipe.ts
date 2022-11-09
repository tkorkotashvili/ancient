import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { IWalletItem } from '../../core/interfaces/user';

@Pipe({
  name: 'walletSum',
  pure: false,
})
export class WalletsSum implements PipeTransform {
  transform(items: IWalletItem[]): any {
    if (items?.length) {
      return items.reduce(
        (previousValue: number, currentValue: IWalletItem) =>
          previousValue + currentValue.amount,
        0
      );
    } else {
      return 0;
    }
  }
}

@NgModule({
  declarations: [WalletsSum],
  exports: [WalletsSum],
})
export class WalletsSumModule {}
