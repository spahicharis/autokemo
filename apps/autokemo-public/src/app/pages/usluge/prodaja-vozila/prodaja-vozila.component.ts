import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-prodaja-vozila',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `

    <app-page-header-section title="Prodaja vozila" subtitle="Usluge > Prodaja vozila" />
  `,
  styles: ``
})
export class ProdajaVozilaComponent {

}
