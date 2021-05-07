import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CitiesComponent } from './cities/cities.component';
import { PostComponent } from './post/post.component';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarouselComponent,
    CitiesComponent,
    PostComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
