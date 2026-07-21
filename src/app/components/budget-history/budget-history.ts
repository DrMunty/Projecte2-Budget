import { Component, signal, computed, input } from '@angular/core';
import type { SortOption } from '../../models/sortOption';
import type { FinalBudget } from '../../models/finalBudget';
import { NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-budget-history',
  imports: [NgClass, DatePipe],
  templateUrl: './budget-history.html',
  styleUrl: './budget-history.css',
})

export class BudgetHistory {
  
  allBudgets = input.required<FinalBudget[]>();
  searchQuery = signal<string>('');
  sortBy = signal<SortOption>('date');
  sortAscending = signal<boolean>(true);

  filteredBudgets = computed(() => {
    let budgets = [...this.allBudgets()];

    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      budgets = budgets.filter(budget => 
        budget.client.name.toLowerCase().includes(query)
      );
    }

    const isAsc = this.sortAscending();
    const criterion = this.sortBy();

    budgets.sort((a, b) => {
      if (criterion === 'name') {
        return isAsc 
          ? a.client.name.localeCompare(b.client.name)
          : b.client.name.localeCompare(a.client.name);
      }

      if (criterion === 'price') {
        return isAsc 
          ? a.totalPrice - b.totalPrice 
          : b.totalPrice - a.totalPrice;
      }

      if (criterion === 'date') {
        return isAsc 
          ? a.date.getTime() - b.date.getTime()
          : b.date.getTime() - a.date.getTime();
      }

      return 0;
    });

    return budgets;
  });

  updateSearchQuery(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  changeSort(option: SortOption): void {
    if (this.sortBy() === option) {
      this.sortAscending.update(val => !val);
    } else {
      this.sortBy.set(option);
      this.sortAscending.set(true);
    }
  }
}