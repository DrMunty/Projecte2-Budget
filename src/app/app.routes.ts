import { Routes } from '@angular/router';
import { DetailedBudget } from './components/detailed-budget/detailed-budget';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'budget/:id', component: DetailedBudget},
    { path: '**', redirectTo: ''}
];
