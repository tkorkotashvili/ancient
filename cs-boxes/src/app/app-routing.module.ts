import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '@layoutheader';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'boxes',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'boxes',
        loadChildren: () =>
          import('@features/boxes/boxes.module').then((m) => m.BoxesModule),
      },
    ],
  },
  {
    data: { name: 'pageNotFound' },
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
