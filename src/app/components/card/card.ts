import { Component, signal } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';

@Component({
  selector: 'app-card',
  imports: [Checkbox],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class Card {

  showExtraOptions = signal<boolean>(false);

  pageNum = signal<number>(0);
  languageNum = signal<number>(0);
  
  onServiceToggle(isSelected: boolean) {
    this.showExtraOptions.set(isSelected);
  }

  changeQuantity(type: 'pages' | 'languages', amount: number) {
    if (type === 'pages') {
      const current = this.pageNum();
      if (current + amount >= 1) this.pageNum.set(current + amount);
    } else {
      const current = this.languageNum();
      if (current + amount >= 1) this.languageNum.set(current + amount);
    }
  }

}

