import { Component, input, signal } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-budget-summary',
  imports: [Dashboard],
  templateUrl: './budget-summary.html',
  styleUrl: './budget-summary.css',
})
export class BudgetSummary {

}
