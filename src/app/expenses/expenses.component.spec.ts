import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponent } from './expenses.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Observable, of } from 'rxjs';
import { Expense } from '../shared/expense';
import { expensesList } from '../shared/DATA';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;
  let htmlPart: HTMLElement;
  let expenseServiceMock = {
    loadExpenses(): Observable<Expense[]> {
      return of(expensesList);
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
    htmlPart = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyOn(expenseServiceMock, 'loadExpenses').and.returnValue(of([]));

      component.ngOnInit();
    });

    it('should call loadExpenses method from expensesService', () => {
      expect(expenseServiceMock.loadExpenses).toHaveBeenCalled();
    });

    it('should render table with 3 tr elements', () => {
      const table = htmlPart.querySelector('table');
      const tableRows = table!.querySelectorAll('tbody > tr');
      expect(tableRows!.length).toEqual(5);
    });
  });

});
