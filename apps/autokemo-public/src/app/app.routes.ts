import { Route } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

export const appRoutes: Route[] = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) }
    ]
  }
];
