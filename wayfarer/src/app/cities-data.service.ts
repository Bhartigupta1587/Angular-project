import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesDataService {
  cities = [
    {
      id: 1,
      name: 'London',
      image: '/assets/images/London.jpg',
      posts: [{
        title: 'London News 1',
        author: 'ammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
      },{
        title: 'London News 2',
        author: 'sammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'

      }]
    }, {
      id: 2,
      name: 'San Francisco',
      image: '/assets/images/san-francisco.png',
      posts: [{
        title: 'san-Francisco News 1',
        author: 'ammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
      },{
        title: 'san-Francisco News 2',
        author: 'sammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'

      }]
    }, {
      id: 3,
      name: 'Sydney',
      image: '/assets/images/gibralter.jpeg',
      posts: [{
        title: 'Sydney 1',
        author: 'ammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
      },{
        title: 'Sydney 2',
        author: 'sammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'

      }]
    },
    {
      id: 4,
      name: 'Seattle',
      image: '/assets/images/seattle.jpeg',
      posts: [{
        title: 'Seattle 1',
        author: 'ammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
      },{
        title: 'Seattle 2',
        author: 'sammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'

      }]
    }
  ];
  constructor() { }

  getAllCities(){
    return this.cities;
  }
  getSingleCity(num:number){
    return this.cities[num];
  }
}
