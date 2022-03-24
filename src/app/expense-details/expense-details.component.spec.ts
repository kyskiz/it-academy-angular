import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailsComponent } from './expense-details.component';
import { Observable, of } from 'rxjs';
import { Expense } from '../shared/expense';
import { ExpensesService } from '../services/expenses.service';
import { ActivatedRoute } from '@angular/router';

describe('ExpenseDetailsComponent', () => {
  let component: ExpenseDetailsComponent;
  let fixture: ComponentFixture<ExpenseDetailsComponent>;
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

  let activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: () => '2',
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ExpensesService, useFactory: () => expenseServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      declarations: [ ExpenseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
