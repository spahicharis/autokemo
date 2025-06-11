import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-rent-a-car',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `

    <app-page-header-section title="Rent a car" subtitle="Usluge > Rent a car" />
  `,
  styles: ``
})
export class RentACarComponent {

}
