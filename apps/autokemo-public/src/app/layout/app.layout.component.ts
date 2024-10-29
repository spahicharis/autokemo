import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './app.footer.component';
import { AppTopBarComponent } from './app.top-bar.component';
import { AppNavbarComponent } from './app.navbar.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AppFooterComponent,
    AppTopBarComponent,
    AppNavbarComponent
  ],
  templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent {

}
