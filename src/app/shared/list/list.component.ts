import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from '../../availability.service';
import { Fruit } from '../../fruits/fruits';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  fruits: Fruit[];

  constructor(private service: AvailabilityService) { }

  ngOnInit() {
    this.service.fetchFruits().subscribe(fruits => this.fruits = fruits);
  }

  refreshStatus(name: string) {
    console.log('refresh ' + name);
  }

}
