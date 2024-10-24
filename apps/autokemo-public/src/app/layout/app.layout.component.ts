import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './app.footer.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AppFooterComponent
  ],
  templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent {

}
