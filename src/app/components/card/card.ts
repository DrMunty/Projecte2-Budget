import { Component, signal, input, computed, output, effect} from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';
import { CardData } from '../../models/cardData';
import { CardSelection } from '../../models/cardSelection';


@Component({
  selector: 'app-card',
  imports: [Checkbox],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class Card {

  isSelected = input<boolean>(false);
  showExtraOptions = signal<boolean>(false);
  pageNum = signal<number>(0);
  languageNum = signal<number>(0);
  cardData = input.required<CardData>();
  allowExtraOptions = input<boolean>(false);
  onCardChange = output <CardSelection>();
  
  constructor() {
    effect(() => {
      this.showExtraOptions.set(this.isSelected());
    });
  }
  
  onServiceToggle(isSelected: boolean) {
    this.showExtraOptions.set(isSelected);
    this.emitChanges();
  }

  changeQuantity(type: 'pages' | 'languages', amount: number) {
    if (type === 'pages') {
      const current = this.pageNum();
      if (current + amount >= 0) this.pageNum.set(current + amount);
    } else {
      const current = this.languageNum();
      if (current + amount >= 0) this.languageNum.set(current + amount);
    }
    this.emitChanges()
  }

  currentCost = computed(() => {
  const base = this.cardData().price;
  if (this.showExtraOptions() && this.allowExtraOptions()) {
    return base + (this.pageNum() + this.languageNum()) * 30;
  }
  return base;
})

emitChanges(): void {
this.onCardChange.emit({
    title: this.cardData().title,
    isSelected: this.showExtraOptions(),
    cost: this.currentCost()
  });
}

  }


