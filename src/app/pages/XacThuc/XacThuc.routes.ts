import { Routes } from '@angular/router';

import { AppDangNhapComponent } from './DangNhap/DangNhap.component';
import { AppDangKyComponent } from './DangKy/DangKy.component';

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