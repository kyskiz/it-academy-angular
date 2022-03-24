import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFormComponent } from './expense-form.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('ExpenseFormComponent', () => {
  let component: ExpenseFormComponent;
  let fixture: ComponentFixture<ExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: HttpClient, useFactory: () => {} }
      ],
      declarations: [ ExpenseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
