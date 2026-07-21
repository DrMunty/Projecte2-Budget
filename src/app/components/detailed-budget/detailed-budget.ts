import { Component, computed, inject, input} from '@angular/core';
import { LocalStorageService } from '../../services/budgets-local-storage';
import { INITIAL_BUDGETS } from '../../../../public/data/mock-budgets';
import { FinalBudget } from '../../models/finalBudget';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detailed-budget',
  imports: [DatePipe],
  templateUrl: './detailed-budget.html',
  styleUrl: './detailed-budget.css',
})

export class DetailedBudget {
  private localStorage = inject(LocalStorageService);
  id = input.required<string>();

  budget = computed(() => {
    return this.localStorage.getAllBudgets().find(b => b.id === this.id());
  });

}
