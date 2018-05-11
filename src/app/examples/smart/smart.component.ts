import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from '../../availability.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  nameProvider: String = 'i am sending this';

  constructor(private service: AvailabilityService) { }

  ngOnInit() {
    this.service.fetchFruits();
  }

  dumbButtonClicked(message: string) {
    console.log(message);
  }

}
