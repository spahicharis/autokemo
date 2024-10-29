import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactsCardsComponent } from './facts-cards.component';

describe('FactsCardsComponent', () => {
  let component: FactsCardsComponent;
  let fixture: ComponentFixture<FactsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FactsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
