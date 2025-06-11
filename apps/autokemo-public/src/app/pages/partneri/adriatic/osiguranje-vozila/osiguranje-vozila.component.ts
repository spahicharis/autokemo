import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-osiguranje-vozila',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `
    <app-page-header-section title="Osiguranje vozila" subtitle="Partneri > Adriatic Osiguranje" />
  `,
  styles: ``
})
export class OsiguranjeVozilaComponent {

}
