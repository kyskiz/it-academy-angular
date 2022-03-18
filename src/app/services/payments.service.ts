import { Injectable } from '@angular/core';
import { Payment } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor() { }

  getPayments(): Payment[] {
    return [
      { name: 'Swedbank', amount: 400, description: 'Avansas' },
      { name: 'Blue/Yellow', amount: -30, description: 'Parama' },
      { name: 'Wolt EE', amount: -7.5, description: 'Food service' },
      { name: 'Jonas Jonaitis', amount: 50, description: 'Skola' },
      { name: 'Bolt food', amount: -7.5, description: 'Food service & delivery' },
    ];
  }
}
