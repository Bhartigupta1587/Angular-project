import { Component, OnInit } from '@angular/core';
import { CitiesDataService } from "../cities-data.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city:any;
  constructor(private cityService: CitiesDataService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = this.cityService.getAllCities().find(city => {
          return city.id === parseInt(params.get('id'),10);
        });
      });
  }

}
