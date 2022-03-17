import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from '../types';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() payment: Payment;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: MouseEvent) {
    this.onClick.emit(event);
  }

}
