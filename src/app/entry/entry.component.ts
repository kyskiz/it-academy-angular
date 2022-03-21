import { Component, EventEmitter, Input, OnInit, OnChanges, AfterViewInit, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Entry } from '../types';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() entry: Entry|undefined;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  myRandomText: string = '';

  constructor() {
    console.log('entry constructor', this.entry);
  }

  ngOnInit(): void {
    console.log('entry ngOnInit', this.entry);
    this.myRandomText = this.getRandomText();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('entry ngOnChanges', changes);
  }

  ngAfterViewInit() {
    console.log('entry ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('entry ngOnDestroy');
  }

  handleClick() {
    this.onClick.emit(this.entry?.text);
  }

  getRandomText() {
    console.log('getRandomText');
    return 'em ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores ducimus error facere id, incidun';
  }

}
