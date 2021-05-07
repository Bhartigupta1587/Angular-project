import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  createAPIObservable(cityName): any{
    return this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
  }
}
