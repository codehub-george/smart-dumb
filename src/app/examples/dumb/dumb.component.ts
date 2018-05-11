import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
  <label>{{name}}</label>
  <button (click)="onClick()">Click me</button>
  `
})
export class DumpComponent implements OnInit {
  @Input() name: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit('inside dumb component');
  }

}
