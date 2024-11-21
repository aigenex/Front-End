import { Routes } from '@angular/router';

// ui
import { AppMonHocComponent } from './mon-hoc/mon-hoc.component';
import { AppCauHoiComponent } from './cau-hoi/cau-hoi.component';
import { AppDeThiComponent } from './de-thi/de-thi.component';
import { AppDevOnlyComponent } from './dev-only/dev-only.component';
import { AppHoTroComponent } from './ho-tro/ho-tro.component';
import { AppCaiDatComponent } from './cai-dat/cai-dat.component';

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
