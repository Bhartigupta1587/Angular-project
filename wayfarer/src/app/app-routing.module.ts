import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {CarouselComponent} from './carousel/carousel.component';
import { CitiesComponent} from './cities/cities.component';
import {LondonComponent} from './london/london.component';
import {SanFranciscoComponent} from './san-francisco/san-francisco.component';
import {SydneyComponent} from './sydney/sydney.component';
import {SeattleComponent} from './seattle/seattle.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: '1',
        component: LondonComponent
      },
      {
        path: '2',
        component: SanFranciscoComponent
      },
      {
        path: '3',
        component: SydneyComponent
      },
      {
        path: '4',
        component: SeattleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
