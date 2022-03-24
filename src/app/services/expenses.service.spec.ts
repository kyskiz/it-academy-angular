import { TestBed } from '@angular/core/testing';

import { ExpensesService } from './expenses.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { expensesList } from '../shared/DATA';
import { Expense } from '../shared/expense';

describe('ExpensesService', () => {
  let service: ExpensesService;
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['post', 'get']);

  httpClientMock.post.and.returnValue({ status: 200, data: {} });
  httpClientMock.get
    .and.callFake((url: string) => {
      if (url === '/api/expenses') {
        return of(expensesList);
      }

      if (url.startsWith('/api/expenses/')) {
        const id = url.split('/api/expenses/')[1];
        return of(expensesList.find((exp) => exp.id === id));
      }

      return of();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useFactory: () => httpClientMock },
      ]
    });
    service = TestBed.inject(ExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadExpenses', () => {

    it('should call \'/api/expenses\' with get request', () => {
      service.loadExpenses();
      expect(httpClientMock.get).toHaveBeenCalledWith('/api/expenses');
    });

    it('should return observable of Expense array', (done) => {
      const responseObs = service.loadExpenses();

      responseObs.subscribe((response) => {
        expect(response).toBeTruthy();
        expect(response.length).toBeDefined();
        expect(response).toEqual(expensesList);
        done();
      });

    });
  });

  describe('getExpense', () => {

    it('should send get request with id', () => {
      service.getExpense('5');
      expect(httpClientMock.get).toHaveBeenCalledWith('/api/expenses/5');
    });

    it('should get observable of specific Expense', () => {
      const responseObs = service.getExpense('5');

      responseObs.subscribe((response) => {
        expensesList.forEach((expense) => {
          if (expense.id === '5') {
            expect(response).toEqual(expense);
          }
        });
      });
    });

  });

  describe('addExpense', () => {
    it('should send post request with expense data', () => {
      const newExpense: Expense = { amount: '123', name: 'Expense1', date: '2020-02-09' };
      service.addExpense(newExpense);

      expect(httpClientMock.post).toHaveBeenCalledWith('/api/expenses', newExpense);
    });
  })

});
