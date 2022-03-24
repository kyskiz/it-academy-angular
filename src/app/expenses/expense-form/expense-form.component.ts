import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ExpenseModel } from './expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  expense: ExpenseModel = new ExpenseModel('', '', '');
  @Output() expenseUpdated: EventEmitter<void> = new EventEmitter();

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {}

  addExpense() {
    this.expensesService.addExpense(this.expense).subscribe(() => {
      this.expenseUpdated.emit();
      this.expense = new ExpenseModel('', '', '');
    });
  }

  resetExpense() {
    this.expense = new ExpenseModel('', '', '');
  }
}
