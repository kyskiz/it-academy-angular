import { Component, OnInit } from '@angular/core';
import { Payment } from '../types';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  payments: Payment[] = [
    { name: 'Swedbank', amount: 400, description: 'Avansas' },
    { name: 'Blue/Yellow', amount: -30, description: 'Parama' },
    { name: 'Wolt EE', amount: -7.5, description: 'Food service' },
    { name: 'Jonas Jonaitis', amount: 50, description: 'Skola' },
    { name: 'Bolt food', amount: -7.5, description: 'Food service & delivery' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handlePaymentClick(event: MouseEvent, payment: Payment) {
    console.log('Payment was clicked at ', event.clientX, event.clientY);
    console.table(payment);
  }

}
