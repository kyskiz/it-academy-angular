import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseOverviewComponent } from './expense-overview/expense-overview.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    HomeComponent,
    ExpensesListComponent,
    ExpenseOverviewComponent,
    ExpenseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
