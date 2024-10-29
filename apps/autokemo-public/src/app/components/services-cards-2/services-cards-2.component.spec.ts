import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesCards2Component } from './services-cards-2.component';

describe('ServicesCards2Component', () => {
  let component: ServicesCards2Component;
  let fixture: ComponentFixture<ServicesCards2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCards2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesCards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
