// @ts-nocheck

import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { CarouselComponent as CC } from 'ngx-carousel-ease';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// register Swiper custom elements
register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CC, CarouselModule, ProgressSpinnerModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  products = [
    {
      title: 'Uskoro - Samouslužna autopraonica',
      subtitle: 'Brzo i efikasno pranje vašeg vozila. Samouslužna autopraonica sa svim potrebnim sadržajima.',
      image: 'lucas-clarysse-XUo09J8yuN0-unsplash.jpg',
      style: 2
    },
    {
      title: 'Prodaja novih i polovnih dijelova',
      subtitle: 'Kvalitetni polovni dijelovi za sve marke vozila. Brzo i pouzdano rješenje za vaš automobil.',
      image: 'automotive_parts-min-scaled.jpg',
      style: 1
    },
    {
      title: 'Uvoz i prodaja vozila',
      subtitle: 'Posjetite nas i pronađite automobil po vašoj mjeri.',
      image: 'mohit-suthar-MTGgloByPzY-unsplash.jpg',
      style: 2
    },
    {
      title: 'Ugradnja i popravak auto stakala',
      subtitle: 'Kvalitetna ugradnja i popravak auto stakala za sve marke vozila. Brzo i pouzdano rješenje za vaš automobil.',
      image: 'liberty-advantage-scaled.jpg',
      style: 1
    },
    {
      title: 'Auto servis',
      subtitle: 'Kompletan servis za vaše vozilo. Kvalitetna usluga i stručni tim.',
      image: 'mert-enes-gorucu-s17eSVKqtB0-unsplash.jpg',
      style: 2
    },
    {
      title: 'Rent a car',
      subtitle: 'Iznajmljivanje vozila po povoljnim cijenama. Fleksibilne opcije najma.',
      image: 'tax-when-renting-a-car.jpg',
      style: 1
    }
  ];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit() {
    const s = this.document.querySelector('.travel-slider');
    if (!s) {
      return;
    }

    new Swiper('.mySwiper', {
      spaceBetween: 30,
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }
}

