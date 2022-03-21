import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from '../types';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry|undefined;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit(this.entry?.text)
  }

}
