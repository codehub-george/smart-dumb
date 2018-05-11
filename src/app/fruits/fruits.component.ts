import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from '../availability.service';
import { Fruit } from './fruits';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits: Fruit[];

  constructor(private service: AvailabilityService) { }

  ngOnInit() {
  }

}
