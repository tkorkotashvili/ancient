import { RouterModule, Routes } from '@angular/router';
import { BoxesModule } from './features/boxes';
import { NgModule } from "@angular/core";

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'boxes',
  },
  {
    loadChildren: () => import('@features/boxes/boxes.module').then((m) => m.BoxesModule),
    path: 'boxes'
  },
  {
    data: { name: 'pageNotFound' },
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

