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
    <nav class="navbar navbar-expand-lg sticky-top bg-primary">
      <div class="container">

        <div class="d-flex flex-column">
          <a routerLink="/" class="navbar-brand d-flex align-items-center  ">
            <h2 class="m-0 text-light"><i class="fa fa-car me-3"></i><img src="autokemo-white-yellow-2.png" alt=""></h2>
          </a>
          <span class="hidden md:block text-xs sm:text-xs text-gray-400">Uvoz i prodaja | Otpad | Servis | Auto stakla</span>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list text-light"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ng-container *ngTemplateOutlet="navigation"></ng-container>
        </div>

      </div>
    </nav>

    <ng-template #navigation>
      <ul class="navbar-nav ms-auto   mb-lg-0">

        @for (item of items; track item.label) {
          <li class="nav-item me-md-3 d-md-flex align-items-center " [class.dropdown]="item.items?.length">
            <a class="nav-link" aria-current="page"
               [class.dropdown-toggle]="item.items?.length"
               data-bs-toggle="dropdown"
               aria-expanded="false"
               [routerLink]="item.routerLink"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: item.routerLinkActiveOptions?.exact || false}"><i class=" {{item.icon}} me-1"></i> {{ item.label }}</a>

            @if (item.items?.length) {
              <ul class="dropdown-menu">
                @for (i of item.items; track i.label) {
                  <li><a class="dropdown-item" [routerLink]="i.routerLink" routerLinkActive="active">{{i.label}}</a></li>
                }

              </ul>
            }
          </li>

        }

        <li>
          <a href="https://olx.ba/shops/autootpadkemo/aktivni"
             target="_blank" class="btn btn-secondary py-2 px-lg-4 ">
            <img src="https://olx.ba/img/new-logo-olx.svg" height="30px" alt="">
          </a>
        </li>

        <li class="py-2 d-md-none">
          <a class="d-flex align-items-center text-decoration-none text-light" href="tel:+387 60 31 13 409">
            <svg class="bi bi-phone" fill="currentColor" height="20" viewbox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </svg>
            <span class="ms-1 white-space-nowrap">+387 60 31 13 409</span></a>
          <a class="d-flex align-items-center ms-lg-4 text-decoration-none text-light" href="tel:+387 61 696 811">
            <svg class="bi bi-phone" fill="currentColor" height="20" viewbox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </svg>
            <span class="ms-1 white-space-nowrap">+387 61 696 811</span></a>
          <a class="d-flex align-items-center ms-lg-4 text-decoration-none text-light" >

            <i class="bi bi-clock"></i>
            <span class="ms-2 white-space-nowrap">Ponedjeljak - Subota, 8:00h - 17:00h</span></a>
        </li>
      </ul>
    </ng-template>
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
      routerLink: '/usluge',
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
      routerLink: '/partneri',
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

