// @ts-nocheck

import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { CarouselComponent as CC } from 'ngx-carousel-ease';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CC],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit() {
    const s = this.document.querySelector('.travel-slider');
    if (!s) {
      return;
    }

    new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

