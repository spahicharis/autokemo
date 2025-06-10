import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `

    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5  animate__animated animate__fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-12 col-lg-3 col-md-6">
            <a routerLink="/" class="navbar-brand d-flex align-items-center ">
              <h2 class="m-0 text-light"><i class="fa fa-car me-3"></i><img src="autokemo-white-yellow-2.png" alt=""></h2>
            </a>
            <p>
              U našoj ponudi pronaći ćete širok asortiman proizvoda i usluga za vaše vozilo. <br>
              Auto servis, auto otpad, rezervne dijelove, auto limarija, auto lakiranje, auto poliranje!
            </p>
          </div>
          <div class="col-12 col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Adresa</h4>
            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i><a class="text-light">Turbe - Travnik, BiH</a></p>
            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i><a class="text-light" href="tel:+387 60 31 13 409">+387 60 31 13 409</a></p>
            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i><a class="text-light" href="tel:+387 61 696 811">+387 61 696 811</a></p>
            <p class="text-light mb-2"><i class="fa fa-envelope me-3"></i><a class="text-light" href="mailto:autoserviskemo@gmail.com">autoserviskemo&#64;gmail.com</a></p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div class="col-12 col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Radno vrijeme</h4>
            <h6 class="text-light">Ponedjeljak - Subota</h6>
            <p class="mb-4">08.00 - 17:00</p>
            <h6 class="text-light">Nedjelja i praznici</h6>
            <p class="mb-0">Ne radimo</p>
          </div>
          <div class="col-12 col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Services</h4>
            <a class="btn btn-link" href="">Diagnostic Test</a>
            <a class="btn btn-link" href="">Engine Servicing</a>
            <a class="btn btn-link" href="">Tires Replacement</a>
            <a class="btn btn-link" href="">Oil Changing</a>
            <a class="btn btn-link" href="">Vacuam Cleaning</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a class="border-bottom" routerLink="/">autokemo.ba</a> - sva prava zadržana.
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AppFooterComponent {}
