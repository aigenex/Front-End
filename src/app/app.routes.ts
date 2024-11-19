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
        redirectTo: '/trang-chu',
        pathMatch: 'full',
      },
      {
        path: 'trang-chu',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'chuc-nang',
        loadChildren: () =>
          import('./pages/ChucNang/ChucNang.routes').then(
            (m) => m.ChucNangRoutes
          ),
      },
      {
        path: 'phan-bo-tro',
        loadChildren: () =>
          import('./pages/PhanBoTro/PhanBoTro.routes').then((m) => m.PhanBoTroRoutes),
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
          import('./pages/XacThuc/XacThuc.routes').then(
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
