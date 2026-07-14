import { Component } from '@angular/core';
import { Card } from '../card/card';
import { signal } from '@angular/core';
import type { CardData } from '../../models/cardData';

@Component({
  selector: 'app-dashboard',
  imports: [Card],
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

}
