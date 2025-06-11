import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-auto-stakla',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `

    <app-page-header-section title="Auto stakla" subtitle="Usluge > Auto stakla" />

  `,
  styles: ``
})
export class AutoStaklaComponent {

}
