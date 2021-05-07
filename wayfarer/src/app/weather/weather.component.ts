import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {WeatherService} from "../weather.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() cityName: string;
  weather: any;
  searchSubject = new Subject();
  constructor(private weatherService: WeatherService,private http: HttpClient) { }
  findWeather(cityName): any{
    this.http
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
      .subscribe(response => this.weather = response);
  }

  ngOnInit(): void {
    // this.searchSubject
    //   .subscribe(cityName => {
    //     this.weatherService.createAPIObservable(cityName)
    //       .subscribe(response => this.weather = response);
    //   });
    this.findWeather(this.cityName);
  console.log(this.cityName);

  }

}
