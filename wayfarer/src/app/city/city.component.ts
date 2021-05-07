import { Component, OnInit } from '@angular/core';
import { CitiesDataService } from "../cities-data.service";
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "../weather.service";
import {Subject} from "rxjs";


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city:any;
  cityName: string;
  weather: any;
  searchSubject = new Subject();
  constructor(private cityService: CitiesDataService, private route: ActivatedRoute,
              private weatherService: WeatherService) { }
  findWeather(cityName): any{
    this.searchSubject.next(cityName);
  }
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = this.cityService.getAllCities().find(city => {
          return city.id === parseInt(params.get('id'),10);
        });
      });

  }


}
