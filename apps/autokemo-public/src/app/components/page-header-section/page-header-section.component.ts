import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header-section',
  standalone: true,
  imports: [],
  template: `
    <section class="py-5  bg-primary">
      <div class="container ">
        <div class="row justify-content-center text-left">
          <div class="col-12">
            <span class="text-muted">{{ subtitle() }}</span>
            <h2 class="mb-3 display-5 fw-bold">{{ title() }}</h2>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class PageHeaderSectionComponent {
  title = input();
  subtitle = input();
}
