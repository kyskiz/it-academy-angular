import { TestBed } from '@angular/core/testing';

import { ExpensesService } from './expenses.service';
import { HttpClient } from '@angular/common/http';
import { expensesList } from '../shared/DATA';
import { of } from 'rxjs';

fdescribe('ExpensesService', () => {
  let service: ExpensesService;
  let httpClientMock = {
    get: (url: string) => of(expensesList),
  };

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
    beforeEach(() => {
      spyOn(httpClientMock, 'get').and.callFake((url: string) => {
        if (url === '/api/expenses') {
          return of(expensesList);
        }
        return of();
      });
    });

    it('should call httpClient get method with /api/expenses', () => {
      service.loadExpenses();
      expect(httpClientMock.get).toHaveBeenCalled();
      expect(httpClientMock.get).toHaveBeenCalledWith('/api/expenses');
    });

  });

  describe('loadExpenses response', () => {

    it('should check loadExpenses response to be Expense array', (done) => {
      const requestObs = service.loadExpenses();

      requestObs.subscribe((response) => {
        expect(response).toBeTruthy();
        expect(response.length).toEqual(expensesList.length);
        expect(response).toEqual(expensesList);
        done();
      });

    });

  });



});
