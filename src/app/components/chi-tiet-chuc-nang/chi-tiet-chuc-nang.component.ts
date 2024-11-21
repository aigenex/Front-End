import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Router, RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';

// card 2
interface cardimgs {
  id: number;
  imgSrc: string;
  title: string;
  routeLink?: string;
}

@Component({
  selector: 'app-chi-tiet-chuc-nang',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './chi-tiet-chuc-nang.component.html',
})
export class AppBlogCardsComponent {
  constructor() {}
  route =  inject(Router);

  //   card 2
  cardimgs: cardimgs[] = [
    {
      id: 1,
      imgSrc: '/assets/images/blog/blog-img1.jpg',
      title: 'Môn học',
      routeLink: '/chuc-nang/mon-hoc',
    },
    {
      id: 2,
      imgSrc: '/assets/images/blog/blog-img2.jpg',
      title: 'Câu hỏi',
      routeLink: '/chuc-nang/cau-hoi',
    },
    {
      id: 3,
      imgSrc: '/assets/images/blog/blog-img3.jpg',
      title: 'Đề thi',
      routeLink: '/chuc-nang/de-thi',
    },
    {
      id: 4,
      imgSrc: '/assets/images/blog/blog-img3.jpg',
      title: 'Dev only',
      routeLink: '/chuc-nang/dev-only',
    },
    {
    id: 5,
    imgSrc: '/assets/images/blog/blog-img1.jpg',
    title: 'Hỗ trợ',
    routeLink: '/chuc-nang/ho-tro',
  },
  {
    id: 6,
    imgSrc: '/assets/images/blog/blog-img2.jpg',
    title: 'Cài đặt',
    routeLink: '/chuc-nang/cai-dat',
  }
  ];

  onClickLink(link: any) {
    if (link === null || link === undefined) {
      this.route.navigate(['/']);
     } else {
      this.route.navigate(link);
     }
  }
}
