import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-autootpad',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `

    <app-page-header-section title="Autootpad" subtitle="Usluge > Autootpad" />

  `,
  styles: ``
})
export class AutootpadComponent {

}
