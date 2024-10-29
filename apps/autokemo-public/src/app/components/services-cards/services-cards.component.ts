import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-services-cards',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule],
  templateUrl: './services-cards.component.html',
  styleUrl: './services-cards.component.scss',
})
export class ServicesCardsComponent {}
