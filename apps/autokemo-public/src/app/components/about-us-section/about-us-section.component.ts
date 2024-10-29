import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.scss',
})
export class AboutUsSectionComponent {}
