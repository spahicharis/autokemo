import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesCardsComponent } from './services-cards.component';

describe('ServicesCardsComponent', () => {
  let component: ServicesCardsComponent;
  let fixture: ComponentFixture<ServicesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
