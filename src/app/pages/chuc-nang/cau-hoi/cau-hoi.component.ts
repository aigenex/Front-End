import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ThemePalette } from '@angular/material/core';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import {
  MatChipsModule,
} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-chips',
  standalone: true,
  templateUrl: './cau-hoi.component.html',
  styleUrls: ['./cau-hoi.component.scss'],
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    CdkDropList,
    CdkDrag,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCauHoiComponent {

}