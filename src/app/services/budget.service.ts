import {Injectable} from '@angular/core';
import {Expense} from "../shared/types";
import {expenses} from "../shared/expenses";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  expenses: Expense[];

  constructor() {
    this.expenses = expenses;
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  getExpense(id: string): Expense | undefined {
    return this.expenses.find(item => item.id === id);
  }
}
