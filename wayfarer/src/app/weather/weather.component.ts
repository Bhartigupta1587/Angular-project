import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {WeatherService} from "../weather.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
cityName: string;
weather: any;
  searchSubject = new Subject();
  constructor(private weatherService: WeatherService) { }
  findWeather(cityName): any{
    this.searchSubject.next(cityName);
  }

  ngOnInit(): void {
    this.searchSubject
      .subscribe(cityName => {
        this.weatherService.createAPIObservable(cityName)
          .subscribe(response => this.weather = response);
      });
  }

}
