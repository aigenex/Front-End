import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="branding">
      <a [routerLink]="['/']">
        <img
          src="./assets/images/logos/logo.svg"
          class="align-middle m-2"
          alt="logo"
          height="40"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
