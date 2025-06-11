import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-auto-praonica',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `
    <app-page-header-section title="Samouslužna autopraonica" subtitle="Usluge > Autopraonica" />
  `,
  styles: ``
})
export class AutoPraonicaComponent {

}
