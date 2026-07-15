import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Dashboard } from './components/dashboard/dashboard';
import { UserForm } from './components/user-form/user-form';

@Component({
  selector: 'app-root',
  imports: [Header, Dashboard, UserForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('budget-albert');
}
