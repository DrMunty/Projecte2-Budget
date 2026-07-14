import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-budget-summary',
  imports: [],
  templateUrl: './budget-summary.html',
  styleUrl: './budget-summary.css',
})
export class BudgetSummary {
  totalPrice = input.required<number>();
}
