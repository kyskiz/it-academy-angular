import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
  @Input() backgroundColor: string = '';
  @Input() textColor:  string = '';

  constructor(private _elemRef: ElementRef, private _renderer: Renderer2) {

  }

  ngOnInit() {
    this._renderer.setStyle(this._elemRef.nativeElement, 'backgroundColor', this.backgroundColor);
    if (this.textColor) this._renderer.setStyle(this._elemRef.nativeElement, 'color', this.textColor);

  }

}
