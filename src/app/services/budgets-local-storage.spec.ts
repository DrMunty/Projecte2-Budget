import { TestBed } from '@angular/core/testing';

import { BudgetsLocalStorage } from './budgets-local-storage';

describe('BudgetsLocalStorage', () => {
  let service: BudgetsLocalStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetsLocalStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
