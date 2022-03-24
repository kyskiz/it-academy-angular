import { TestBed } from '@angular/core/testing';

import { ExpensesService } from './expenses.service';
import { HttpClient } from '@angular/common/http';

describe('ExpensesService', () => {
  let service: ExpensesService;
  let httpClientMock = {};

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
});
