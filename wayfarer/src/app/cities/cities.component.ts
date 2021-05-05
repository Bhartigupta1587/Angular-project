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
      name: 'London',
      image: '/assets/images/London.jpg'
    }, {
      id: 2,
      name: 'San Francisco',
      image: '/assets/images/san-francisco.png'
    }, {
      id: 3,
      name: 'Sydney',
      image: '/assets/images/gibralter.jpeg'
    },
    {
      id: 4,
      name: 'Seattle',
      image: '/assets/images/seattle.jpeg'
    }
  ];
  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
}
