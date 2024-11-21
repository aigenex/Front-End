import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/chuc-nang',
        pathMatch: 'full',
      },
      {
        path: 'chuc-nang',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'chuc-nang',
        loadChildren: () =>
          import('./pages/chuc-nang/chuc-nang.routes').then(
            (m) => m.ChucNangRoutes
          ),
      },
      {
        path: 'phan-bo-tro',
        loadChildren: () =>
          import('./pages/phan-bo-tro/phan-bo-tro.routes').then((m) => m.PhanBoTroRoutes),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'xac-thuc',
        loadChildren: () =>
          import('./pages/xac-thuc/xac-thuc.routes').then(
            (m) => m.XacThucRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
