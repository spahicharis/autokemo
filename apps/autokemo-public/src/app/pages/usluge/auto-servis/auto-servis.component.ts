import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-auto-servis',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `
    <app-page-header-section title="Auto servis" subtitle="Usluge > Servis" />
  `,
  styles: ``
})
export class AutoServisComponent {

}
