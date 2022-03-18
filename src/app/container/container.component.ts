import { Component, OnInit } from '@angular/core';
import { Payment } from '../types';
import { PaymentsService } from '../services/payments.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  payments: Payment[];

  constructor(private paymentsService: PaymentsService) {
    this.payments = this.paymentsService.getPayments();
  }

  ngOnInit(): void {
  }

  handlePaymentClick(event: MouseEvent, payment: Payment) {
    console.log('Payment was clicked at ', event.clientX, event.clientY);
    console.table(payment);
  }

}
