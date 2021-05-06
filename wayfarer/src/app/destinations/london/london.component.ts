import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.css']
})
export class LondonComponent implements OnInit {
  cityName: string = 'London';
  posts= [{
    title: 'News 1',
    author: 'ammy',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
  },{
    title: 'News 2',
    author: 'sammy',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'

  }
  ];
  constructor() { }

  ngOnInit(): void{
  }

}
