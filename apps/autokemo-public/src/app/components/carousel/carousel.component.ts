// @ts-nocheck

import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { CarouselComponent as CC } from 'ngx-carousel-ease';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { CarouselModule } from 'primeng/carousel';
// register Swiper custom elements
register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CC, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  products = [
    {
      title: 'Prodaja <span class="text-primary">novih i polovnih</span> dijelova',
      subtitle: 'Kvalitetni polovni dijelovi za sve marke vozila. Brzo i pouzdano rješenje za vaš automobil.',
      image: 'carousel-bg-1.jpg',
      style: 1
    },
    {
      title: 'Uvoz i prodaja vozila',
      subtitle: 'Posjetite nas i pronađite automobil po vašoj mjeri.',
      image: 'carousel-bg-2.jpg',
      style: 2
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

