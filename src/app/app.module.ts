import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { PaymentComponent } from './payment/payment.component';
import { CommonModule } from '@angular/common';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { SortPaymentsPipe } from './pipes/sort-payments.pipe';
import { HandleClickDirective } from './directives/handle-click.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ContainerComponent,
    PaymentComponent,
    BackgroundColorDirective,
    SortPaymentsPipe,
    HandleClickDirective,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
