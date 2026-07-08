import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';
import { Checkbox } from './components/checkbox/checkbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Checkbox],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('budget-albert');
}
