import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BudgetHistory } from './budget-history';

describe('BudgetHistory Gherkin scenarios', () => {
  let component: BudgetHistory;
  let fixture: ComponentFixture<BudgetHistory>;

  const budgets = [
    {
      id: '1',
      client: { name: 'Anna Garcia', phone: 600000001, email: 'anna@example.com' },
      services: [{ title: 'Seo', cost: 300 }],
      totalPrice: 500,
      date: new Date('2024-01-15T00:00:00.000Z'),
    },
    {
      id: '2',
      client: { name: 'Albert Muntal', phone: 600000002, email: 'albert@example.com' },
      services: [{ title: 'Web', cost: 500 }],
      totalPrice: 800,
      date: new Date('2024-02-15T00:00:00.000Z'),
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetHistory, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetHistory);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('allBudgets', budgets);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('Scenario: Given a list of budgets, When the component renders, Then the heading and the budget cards are shown', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Pressupostos en curs:');
    expect(compiled.textContent).toContain('Anna Garcia');
    expect(compiled.textContent).toContain('Albert Muntal');
  });

  it('Scenario: Given a search term, When the user filters by name, Then only the matching budgets remain visible', () => {
    const input = fixture.nativeElement.querySelector('#budget-search') as HTMLInputElement;
    input.value = 'Anna';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.filteredBudgets().length).toBe(1);
    expect(component.filteredBudgets()[0].client.name).toBe('Anna Garcia');
  });
});
