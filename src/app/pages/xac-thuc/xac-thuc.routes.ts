import { Routes } from '@angular/router';

import { AppDangNhapComponent } from './dang-nhap/dang-nhap.component';
import { AppDangKyComponent } from './dang-ky/dang-ky.component';

export const XacThucRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dang-nhap',
        component: AppDangNhapComponent,
      },
      {
        path: 'dang-ky',
        component: AppDangKyComponent,
      },
    ],
  },
];