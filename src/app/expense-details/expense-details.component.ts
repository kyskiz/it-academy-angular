import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Expense} from "../shared/types";
import {BudgetService} from "../services/budget.service";

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {
  expense: Expense | undefined;

  constructor(private activatedRoute: ActivatedRoute, private budgetService: BudgetService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.expense = this.budgetService.getExpense(id);
    }
  }

}
