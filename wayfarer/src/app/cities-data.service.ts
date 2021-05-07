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
      image: 'https://searchfrog.com.au/wp-content/uploads/2020/12/moving-to-sydney.jpg',
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
    },
    {
      id: 5,
      name: 'India',
      image: '/assets/images/India.jpeg',
      posts: [{
        title: 'India 1',
        author: 'ammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
      },{
        title: 'India 2',
        author: 'sammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'

      }]
    },{
      id: 6,
      name: 'China',
      image: '/assets/images/shanghai.jpeg',
      posts: [{
        title: 'China 1',
        author: 'ammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
      },{
        title: 'China 2',
        author: 'sammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'

      }]
    },{
      id: 7,
      name: 'Japan',
      image: '/assets/images/japan.jpeg',
      posts: [{
        title: 'Japan 1',
        author: 'ammy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, pariatur qui quis quo ullam vel? Accusamus maxime officia vitae voluptatibus! Doloremque maiores mollitia nobis quisquam. Laboriosam molestiae quod voluptates?'
      },{
        title: 'Japan 2',
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
