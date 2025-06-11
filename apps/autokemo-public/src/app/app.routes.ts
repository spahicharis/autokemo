import { Route } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

export const appRoutes: Route[] = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
      { path: 'usluge', loadComponent: () => import('./pages/usluge/usluge.component').then(m => m.UslugeComponent) },
      {
        path: 'usluge/auto-otpad',
        loadComponent: () => import('./pages/usluge/autootpad/autootpad.component').then(m => m.AutootpadComponent)
      },
      {
        path: 'usluge/prodaja-vozila',
        loadComponent: () => import('./pages/usluge/prodaja-vozila/prodaja-vozila.component').then(m => m.ProdajaVozilaComponent)
      },
      {
        path: 'usluge/auto-servis',
        loadComponent: () => import('./pages/usluge/auto-servis/auto-servis.component').then(m => m.AutoServisComponent)
      },
      {
        path: 'usluge/auto-stakla',
        loadComponent: () => import('./pages/usluge/auto-stakla/auto-stakla.component').then(m => m.AutoStaklaComponent)
      },
      {
        path: 'usluge/rent-a-car',
        loadComponent: () => import('./pages/usluge/rent-a-car/rent-a-car.component').then(m => m.RentACarComponent)
      },
      {
        path: 'usluge/auto-praonica',
        loadComponent: () => import('./pages/usluge/auto-praonica/auto-praonica.component').then(m => m.AutoPraonicaComponent)
      },
      {
        path: 'partneri',
        loadComponent: () => import('./pages/partneri/partneri.component').then(m => m.PartneriComponent)
      },
      {
        path: 'partneri/adriatic-osiguranje',
        loadComponent: () => import('./pages/partneri/adriatic/adriatic.component').then(m => m.AdriaticComponent)
      },
      {
        path: 'partneri/bihamk',
        loadComponent: () => import('./pages/partneri/bihamk/bihamk.component').then(m => m.BihamkComponent)
      },
      {
        path: 'kontakt',
        loadComponent: () => import('./pages/kontakt/kontakt.component').then(m => m.KontaktComponent)
      },
      {
        path: 'novosti',
        loadComponent: () => import('./pages/novosti/novosti.component').then(m => m.NovostiComponent)
      },

      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
