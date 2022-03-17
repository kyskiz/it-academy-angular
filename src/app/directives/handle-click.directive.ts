import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHandleClick]'
})
export class HandleClickDirective {

  constructor() { }

  @HostListener('click', ["$event"]) handleClick(event: MouseEvent) {
    console.log('appHandleClick', event);
  }

}
