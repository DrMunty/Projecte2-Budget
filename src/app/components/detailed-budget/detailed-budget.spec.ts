import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from '../../services/budgets-local-storage';

import { DetailedBudget } from './detailed-budget';

describe('DetailedBudget Gherkin scenarios', () => {
  let component: DetailedBudget;
  let fixture: ComponentFixture<DetailedBudget>;
  let localStorageService: LocalStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedBudget],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedBudget);
    component = fixture.componentInstance;
    localStorageService = TestBed.inject(LocalStorageService);
    localStorage.clear();
    fixture.componentRef.setInput('id', 'missing-id');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('Scenario: Given an existing budget id, When the component renders, Then the detailed budget information is shown', () => {
    const budget = {
      id: 'budget-1',
      client: { name: 'Maria Lopez', phone: 600000003, email: 'maria@example.com' },
      services: [{ title: 'Ads', cost: 400 }],
      totalPrice: 400,
      date: new Date('2024-03-15T00:00:00.000Z'),
    };

    localStorageService.setItem('budgets', [budget]);
    fixture.componentRef.setInput('id', budget.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Detall del Pressupost');
    expect(compiled.textContent).toContain('Maria Lopez');
    expect(compiled.querySelector('button[aria-label="Descarregar el pressupost com a PDF"]')).not.toBeNull();
  });

  it('Scenario: Given a missing budget id, When the component renders, Then it shows the not found message', () => {
    fixture.componentRef.setInput('id', 'missing-id');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Pressupost no trobat');
  });
});
