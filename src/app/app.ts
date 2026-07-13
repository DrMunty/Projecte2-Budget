import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Card } from './components/card/card';
import { Checkbox } from './components/checkbox/checkbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Card, Checkbox],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('budget-albert');
}
