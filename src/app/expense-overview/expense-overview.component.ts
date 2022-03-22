import {Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Expense} from "../shared/types";

@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.css']
})
export class ExpenseOverviewComponent implements OnInit {
  @Input() expense: Expense | undefined;
  @Output() onClickGetExpenseId: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onExpenseClick(expense: Expense): void {
    console.log("clicked", expense);
    this.onClickGetExpenseId.emit(expense.id);
  }
}
