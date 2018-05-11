import { Component, OnInit } from '@angular/core';
import { Vegetable } from './vegetable';
import { AvailabilityService } from '../availability.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  vegetables: Vegetable[];

  constructor(private service: AvailabilityService) { }

  ngOnInit() {
    this.service.fetchVegetables().subscribe(vegetables => this.vegetables = vegetables);
  }

  refreshStatus(name: string) {
    console.log('refresh ' + name);
  }

  refreshAll() {
    console.log('refresh list');
  }

}
