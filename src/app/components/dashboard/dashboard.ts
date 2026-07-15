import { Component, computed } from '@angular/core';
import { Card } from '../card/card';
import { signal } from '@angular/core';
import type { CardData } from '../../models/cardData';
import type { CardSelection } from '../../models/cardSelection';
import type { UserFormInterface } from '../../models/userForm';
import { BudgetSummary } from '../budget-summary/budget-summary';
import { UserForm } from '../user-form/user-form';

@Component({
  selector: 'app-dashboard',
  imports: [Card, BudgetSummary, UserForm],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
myDashboard = signal<CardData[]>([
  {
    title: "Seo",
    description: "Progamació d'una web responsive completa",
    price: 300
  },

    {
    title: "Ads",
    description: "Progamació d'una web responsive completa",
    price: 400
  },

  {
    title: "Web",
    description: "Progamació d'una web responsive completa",
    price: 500
  }

]);


cardsState = signal<Map<string, CardSelection>>(new Map());

updateCardState(event: CardSelection) {
  const currentMap = new Map(this.cardsState());
  
  if (event.isSelected) {
    currentMap.set(event.title, event);
  } else {
    currentMap.delete(event.title);
  }
  this.cardsState.set(currentMap);
}

totalBudget = computed(() => {
  let sum = 0;
  for (const card of this.cardsState().values()) {
    sum += card.cost;
  }
  return sum;
});

saveNewBudget(budgetDetails: UserFormInterface) {
    console.log('User info:', budgetDetails);
    console.log('Total Budget:', this.totalBudget());
}
}
