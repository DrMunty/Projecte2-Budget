import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSummary } from './budget-summary';

describe('BudgetSummary Gherkin scenarios', () => {
  let component: BudgetSummary;
  let fixture: ComponentFixture<BudgetSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetSummary);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('totalPrice', 1250);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('Scenario: Given a total price, When the component renders, Then it shows the summary label and the live price', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Preu pressuposat:');
    expect(compiled.textContent).toContain('1250');
    expect(compiled.querySelector('[aria-live="polite"]')).not.toBeNull();
  });
});
