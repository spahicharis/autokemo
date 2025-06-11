import { Component } from '@angular/core';
import { PageHeaderSectionComponent } from '../../components/page-header-section/page-header-section.component';

@Component({
  selector: 'app-novosti',
  standalone: true,
  imports: [
    PageHeaderSectionComponent
  ],
  template: `
   <app-page-header-section title="Novosti" subtitle="Početna > Novosti"/>
  `,
  styles: ``
})
export class NovostiComponent {

}
