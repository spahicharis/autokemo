import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid bg-secondary p-0">
      <div class="row gx-0 d-none d-lg-flex">
        <div class="col-lg-7 px-5 text-start">
          <div class="h-100 d-inline-flex align-items-center py-3 me-4">
            <small class="fa fa-map-marker-alt text-primary me-2"></small>
            <small>Turbe, BiH</small>
          </div>
          <div class="h-100 d-inline-flex align-items-center py-3">
            <small class="far fa-clock text-primary me-2"></small>
            <small>Ponedjeljak - Subota, 8:00h - 17:00h</small>
          </div>
        </div>
        <div class="col-lg-5 px-5 text-end">
          <div class="h-100 d-inline-flex align-items-center py-3 me-4">
            <small class="fa fa-phone-alt text-primary me-2"></small>
            <small><a href="tel:+387 60 31 13 409">+387 60 31 13 409</a></small>
          </div>
          <div class="h-100 d-inline-flex align-items-center">
            <a class="btn   text-primary me-1" href="https://www.facebook.com/autoserviskemo/"><i class="fab fa-facebook-f"></i></a>
            <a class="btn   text-primary me-0" href="https://www.instagram.com/explore/locations/1023754334/auto-kemo-doo"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AppTopBarComponent {}
