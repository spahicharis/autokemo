import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-adriatic',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `
    <app-page-header-section title="Adriatic Osiguranje" subtitle="Partneri > Osiguranje vozila" />
  `,
  styles: ``
})
export class AdriaticComponent {

}
