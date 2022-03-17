import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../types';

@Pipe({
  name: 'sortPayments'
})
export class SortPaymentsPipe implements PipeTransform {

  transform(value: Payment[], key: 'name' | 'amount' = 'name'): Payment[] {
    return value.sort((a, b) => {
      return a[key] < b[key] ? -1 : 1
    });
  }

}
