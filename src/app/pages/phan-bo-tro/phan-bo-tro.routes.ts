import { Routes } from '@angular/router';


// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppCauHoiThuongGapComponent } from './cau-hoi-thuong-gap/cau-hoi-thuong-gap.component';

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
