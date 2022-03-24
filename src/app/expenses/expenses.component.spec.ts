import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponent } from './expenses.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Observable, of } from 'rxjs';
import { Expense } from '../shared/expense';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;
  let expenseServiceMock = {
    loadExpenses(): Observable<Expense[]> {
      return of([]);
    },

    getExpense(id: string): Observable<Expense> {
      return of();
    },

    addExpense(expense: Expense): Observable<Expense> {
      return of();
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: HttpClient, useFactory: () => {} },
        { provide: ExpensesService, useFactory: () => expenseServiceMock }
      ],
      declarations: [ ExpensesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
