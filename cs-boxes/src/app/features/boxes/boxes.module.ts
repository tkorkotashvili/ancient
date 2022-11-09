import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { BoxesRoutingModule } from '@features/boxes/boxes-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ListComponent, ItemComponent, DetailsComponent],
  imports: [CommonModule, BoxesRoutingModule],
})
export class BoxesModule {}
