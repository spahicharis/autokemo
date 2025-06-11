import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-slep-sluzba',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `
    <app-page-header-section title="Šlep služba" subtitle="Partneri > Bihamk" />
  `,
  styles: ``
})
export class SlepSluzbaComponent {

}
