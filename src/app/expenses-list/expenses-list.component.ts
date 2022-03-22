import {Component, OnInit} from '@angular/core';
import {Expense} from "../shared/types";
import {BudgetService} from "../services/budget.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private budgetService: BudgetService, private router: Router) {
  }

  ngOnInit(): void {
    this.expenses = this.budgetService.getExpenses();
    console.log(this.expenses)
  }

  goToExpense(id: string) {
    this.router.navigate(['/expenses', id]);
  }

}
