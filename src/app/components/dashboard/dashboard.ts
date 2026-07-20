import { Component, computed, signal} from '@angular/core';
import { Card } from '../card/card';
import type { CardData } from '../../models/cardData';
import type { CardSelection } from '../../models/cardSelection';
import type { UserFormInterface } from '../../models/userForm';
import type { FinalBudget } from '../../models/finalBudget';
import { BudgetSummary } from '../budget-summary/budget-summary';
import { UserForm } from '../user-form/user-form';
import { BudgetHistory } from '../budget-history/budget-history';

@Component({
  selector: 'app-dashboard',
  imports: [Card, BudgetSummary, UserForm, BudgetHistory],
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
budgetList = signal<FinalBudget[]>([])

updateCardState(event: CardSelection) {
  const wasEmpty = this.cardsState().size === 0;
  const currentMap = new Map(this.cardsState());
  
  if (event.isSelected) {
    currentMap.set(event.title, event);
  } else {
    currentMap.delete(event.title);
  }
  this.cardsState.set(currentMap);

  if (wasEmpty && this.cardsState().size > 0) {
    this.scrollToElement('budget-form-container');
  }
  else if (event.title.toLowerCase().includes('web') && event.isSelected) {
    this.scrollToElement('web-card');
  }
}

totalBudget = computed(() => {
  let sum = 0;
  for (const card of this.cardsState().values()) {
    sum += card.cost;
  }
  return sum;
});

saveNewBudget(budgetDetails: UserFormInterface) {
  const activeServices = Array.from(this.cardsState().values()).map(card => ({
      title: card.title,
      cost: card.cost
}));
const newBudget: FinalBudget = {
      id: Date.now().toString(),
      client: budgetDetails,
      services: activeServices,
      totalPrice: this.totalBudget(),
      date: new Date()
    };

    this.budgetList.update(list => [...list, newBudget]);
    setTimeout(() => {
    this.scrollToElement('budget-history-container');
  }, 100);
  
  }

private scrollToElement(elementId: string): void {
  requestAnimationFrame(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  });
}
}

