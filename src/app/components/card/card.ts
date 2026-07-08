import { Component } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';


@Component({
  selector: 'app-card',
  imports: [Checkbox],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class Card {
  
  onServiceToggle(isSelected: boolean) {
    console.log('¿El servicio SEO está marcado?:', isSelected);
    
    if (isSelected){
    } else {
      
    }
  }
}

