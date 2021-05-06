import {Component, OnInit} from '@angular/core';
import { CitiesDataService } from "../cities-data.service";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = [];
  constructor(private cityService: CitiesDataService) {

  }
  ngOnInit(): void {
    this.cities=this.cityService.getAllCities();
  }
}
