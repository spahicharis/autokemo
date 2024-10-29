import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ServicesCardsComponent } from '../../components/services-cards/services-cards.component';
import { AboutUsSectionComponent } from '../../components/about-us-section/about-us-section.component';
import { FactsCardsComponent } from '../../components/facts-cards/facts-cards.component';
import { ServicesCards2Component } from '../../components/services-cards-2/services-cards-2.component';
import { AppFooterComponent } from '../../layout/app.footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, ServicesCardsComponent, AboutUsSectionComponent, FactsCardsComponent, ServicesCards2Component, AppFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
