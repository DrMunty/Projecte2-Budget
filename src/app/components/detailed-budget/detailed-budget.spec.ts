import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBudget } from './detailed-budget';

describe('DetailedBudget', () => {
  let component: DetailedBudget;
  let fixture: ComponentFixture<DetailedBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedBudget],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedBudget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
