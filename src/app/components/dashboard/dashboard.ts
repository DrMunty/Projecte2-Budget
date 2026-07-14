import { Component } from '@angular/core';
import { Card } from '../card/card';
import { signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
myDashboard = signal<CardData[]>([
  {}

])
}
