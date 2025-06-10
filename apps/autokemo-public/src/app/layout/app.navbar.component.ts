import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, MenubarModule],
  template: `
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container">

        <div class="d-flex flex-column">
          <a routerLink="/" class="navbar-brand d-flex align-items-center  ">
            <h2 class="m-0 text-light"><i class="fa fa-car me-3"></i><img src="autokemo-white-yellow-2.png" alt=""></h2>
          </a>
          <span class="hidden md:block text-xs sm:text-xs text-gray-400">Uvoz i prodaja | Otpad | Servis | Auto stakla</span>
        </div>

        <p-menubar [model]="items" />

      </div>
    </nav>
  `,
  styles: ``,
})
export class AppNavbarComponent {

  items: MenuItem[] = [
    {
      label: 'Početna',
      icon: 'bi bi-house',
      routerLink: '/',
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'Usluge',
      icon: 'bi bi-tools',
      items: [
        { label: 'Auto otpad', routerLink: '/usluge/auto-otpad' },
        { label: 'Prodaja vozila', routerLink: '/usluge/prodaja-vozila' },
        { label: 'Auto servis', routerLink: '/usluge/auto-servis' },
        { label: 'Auto stakla', routerLink: '/usluge/auto-stakla' },
        { label: 'Rent a car', routerLink: '/usluge/rent-a-car' },
        { label: 'Samouslužna autopraonica', routerLink: '/usluge/auto-praonica' }
      ]
    },
    {
      label: 'Partneri',
      icon: 'bi bi-people',
      items: [
        { label: 'Adriatic osiguranje', routerLink: '/partneri/adriatic-osiguranje' },
        { label: 'Bihamk', routerLink: '/partneri/bihamk' }
      ]
    },
    {
      label: 'Novosti',
      icon: 'bi bi-newspaper',
      routerLink: '/novosti'
    },
    {
      label: 'Kontakt',
      icon: 'bi bi-envelope',
      routerLink: '/kontakt'
    }
  ];

}

