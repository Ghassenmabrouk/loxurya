import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      padding-top: 70px;
      min-height: calc(100vh - 70px);
    }
  `]
})
export class AppComponent {
  title = 'luxury-car-rental';
}