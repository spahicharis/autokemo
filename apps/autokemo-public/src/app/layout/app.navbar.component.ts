import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark shadow sticky-top p-0">
      <div class="d-flex flex-column">
        <a routerLink="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 class="m-0 text-light"><i class="fa fa-car me-3"></i><img src="autokemo-white-yellow-2.png" alt=""></h2>
        </a>
        <span class="px-4 px-lg-5 text-xs sm:text-sm text-gray-400">Uvoz i prodaja | Otpad | Servis | Autolakirer | Auto stakla</span>
      </div>

      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0 gap-3 me-2">
          <a routerLink="" class="nav-item nav-link active">O nama</a>
          <a routerLink="" fragment="usluge" class="nav-item nav-link active">Usluge</a>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link active dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div class="dropdown-menu fade-up m-0">
              <a href="booking.html" class="dropdown-item">Booking</a>
              <a href="team.html" class="dropdown-item">Technicians</a>
              <a href="testimonial.html" class="dropdown-item">Testimonial</a>
              <a href="404.html" class="dropdown-item">404 Page</a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link active">Kontakt</a>
        </div>
        <a href="https://olx.ba/shops/autootpadkemo/aktivni"
           target="_blank"
           class="btn btn-secondary py-3 px-lg-4 d-none d-lg-block">
          <img src="https://olx.ba/img/new-logo-olx.svg" height="30px" alt="">
        </a>
      </div>
    </nav>
  `,
  styles: ``,
})
export class AppNavbarComponent {}
