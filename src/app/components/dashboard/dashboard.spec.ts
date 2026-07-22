import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Dashboard } from './dashboard';

describe('Dashboard Gherkin scenarios', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard, RouterTestingModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('Scenario: Given no selected cards, When the user selects a service, Then the dashboard total budget updates', () => {
    component.updateCardState({ title: 'Seo', isSelected: true, cost: 300 });

    expect(component.cardsState().size).toBe(1);
    expect(component.totalBudget()).toBe(300);
  });

  it('Scenario: Given a selected service and user details, When the budget is saved, Then the list and local storage are updated', () => {
    component.updateCardState({ title: 'Web', isSelected: true, cost: 500 });

    component.saveNewBudget({
      name: 'Albert',
      phone: 600000004,
      email: 'albert@example.com',
    });

    expect(component.budgetList().length).toBeGreaterThan(0);
    expect(component.cardsState().size).toBe(0);

    const savedBudgets = component.localStorage.getItem('budgets');
    expect(savedBudgets[savedBudgets.length - 1].client.name).toBe('Albert');
    expect(savedBudgets[savedBudgets.length - 1].totalPrice).toBe(500);
  });
});
