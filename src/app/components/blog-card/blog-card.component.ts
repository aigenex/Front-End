import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';

// card 2
interface cardimgs {
  id: number;
  imgSrc: string;
  title: string;
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardsComponent {
  constructor() {}

  //   card 2
  cardimgs: cardimgs[] = [
    {
      id: 1,
      imgSrc: '/assets/images/blog/blog-img1.jpg',
      title: 'Môn học',
    },
    {
      id: 2,
      imgSrc: '/assets/images/blog/blog-img2.jpg',
      title: 'Câu hỏi',
    },
    {
      id: 3,
      imgSrc: '/assets/images/blog/blog-img3.jpg',
      title: 'Đề thi',
    },
    {
      id: 4,
      imgSrc: '/assets/images/blog/blog-img3.jpg',
      title: 'Dev only',
    },
    {
    id: 5,
    imgSrc: '/assets/images/blog/blog-img1.jpg',
    title: 'Hỗ trợ',
  },
  {
    id: 6,
    imgSrc: '/assets/images/blog/blog-img2.jpg',
    title: 'Cài đặt',
  }
  ];
}
