import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-check',
  templateUrl: './list-check.component.html',
  styleUrls: ['./list-check.component.css']
})
export class ListCheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refreshAll() {
    console.log('refresh list');
  }

}
