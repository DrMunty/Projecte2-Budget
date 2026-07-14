import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Dashboard } from './components/dashboard/dashboard';
import { BudgetSummary } from './components/budget-summary/budget-summary';

@Component({
  selector: 'app-root',
  imports: [Header, Dashboard, BudgetSummary],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('budget-albert');
}
