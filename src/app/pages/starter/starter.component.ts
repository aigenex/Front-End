import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppChiTietChucNangComponent } from 'src/app/components/chi-tiet-chuc-nang/chi-tiet-chuc-nang.component';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    AppChiTietChucNangComponent,
  ],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {}
