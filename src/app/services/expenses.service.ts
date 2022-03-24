import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../shared/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private httpClient: HttpClient) {}

  loadExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>('/api/expenses');
  }

  getExpense(id: string): Observable<Expense> {
    return this.httpClient.get<Expense>(`/api/expenses/${id}`);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(`/api/expenses`, expense);
  }
}
