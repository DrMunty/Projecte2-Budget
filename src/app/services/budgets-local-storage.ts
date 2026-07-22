import { Injectable } from '@angular/core';
import { FinalBudget } from '../models/finalBudget';
import { INITIAL_BUDGETS } from '../../../public/data/mock-budgets';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() {}

  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to local storage', e);
    }
  }

  getItem(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error reading from local storage', e);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing from local storage', e);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error clearing local storage', e);
    }
  }

getAllBudgets(): FinalBudget[] {
  const saved = this.getItem('budgets');
  let fullList: FinalBudget[] = INITIAL_BUDGETS;

  if (saved && Array.isArray(saved) && saved.length > 0) {
    const savedBudgets: FinalBudget[] = saved.map((budget: any) => ({
      ...budget,
      date: new Date(budget.date)
    }));

    const customUserBudgets = savedBudgets.filter(
      savedBudget => !INITIAL_BUDGETS.some(initial => initial.id === savedBudget.id)
    );

    fullList = [...INITIAL_BUDGETS, ...customUserBudgets];
  }

  return fullList.map(budget => {
    let calculatedTotal = 0;

    const updatedServices = budget.services.map((service: any) => {
      const basePrices: Record<string, number> = { seo: 300, ads: 400, web: 500 };
      const titleKey = service.title.toLowerCase();
      const basePrice = basePrices[titleKey] ?? 0;

      const extras = (service.pages && service.languages)
        ? (service.pages + service.languages) * 30
        : 0;

      const serviceCost = service.cost ?? (basePrice + extras);
      calculatedTotal += serviceCost;

      return {
        ...service,
        cost: serviceCost
      };
    });

    return {
      ...budget,
      services: updatedServices,
      totalPrice: budget.totalPrice || calculatedTotal
    };
  });
}
}