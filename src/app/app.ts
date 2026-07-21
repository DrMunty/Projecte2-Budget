import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Dashboard } from './components/dashboard/dashboard';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('budget-albert');
}
