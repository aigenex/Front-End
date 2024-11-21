import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Trang chủ', url: '/chuc-nang' },
        { title: 'Starter' },
      ],
    },
  },
];
