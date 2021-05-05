import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = [
    {
      id: 1,
      name: 'San Francisco',
      imgUrl: '/assets/images/san-francisco.png'
    }, {
      id: 2,
      name: 'London',
      imgUrl: '/assets/images/London.jpg'
    }, {
      id: 3,
      name: 'Sydney',
      imgUrl: '/assets/images/gibralter.jpeg'
    },
    {
      id: 4,
      name: 'Seattle',
      imgUrl: '/assets/images/seattle.jpeg'
    }
  ];
  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
}
