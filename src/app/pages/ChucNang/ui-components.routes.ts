import { Routes } from '@angular/router';

// ui
import { AppMonHocComponent } from './MonHoc/MonHoc.component';
import { AppCauHoiComponent } from './CauHoi/CauHoi.component';
import { AppDeThiComponent } from './DeThi/DeThi.component';
import { AppDevOnlyComponent } from './DevOnly/DevOnly.component';
import { AppHoTroComponent } from './HoTro/HoTro.component';
import { AppCaiDatComponent } from './CaiDat/CaiDat.component';

export const ChucNangRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mon-hoc',
        component: AppMonHocComponent,
      },
      {
        path: 'cau-hoi',
        component: AppCauHoiComponent,
      },
      {
        path: 'de-thi',
        component: AppDeThiComponent,
      },
      {
        path: 'dev-only',
        component: AppDevOnlyComponent,
      },
      {
        path: 'ho-tro',
        component: AppHoTroComponent,
      },
      {
        path: 'cai-dat',
        component: AppCaiDatComponent,
      },
    ],
  },
];
