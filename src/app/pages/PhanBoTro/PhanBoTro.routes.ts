import { Routes } from '@angular/router';


// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppCauHoiThuongGapComponent } from './CauHoiThuongGap/CauHoiThuongGap.component';

export const PhanBoTroRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'icons',
        component: AppIconsComponent,
      },
      {
        path: 'cau-hoi-thuong-gap',
        component: AppCauHoiThuongGapComponent,
      },
    ],
  },
];
