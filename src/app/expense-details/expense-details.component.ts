import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ExpensesService } from '../services/expenses.service';
import { Expense } from '../shared/expense';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  expense$: Observable<Expense> = of();
  id: string | null = '';

  constructor(
    private expenseService: ExpensesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.expense$ = this.expenseService.getExpense(this.id);
    }
  }
}
