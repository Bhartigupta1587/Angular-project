import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CitiesComponent } from './cities/cities.component';
import { LondonComponent } from './london/london.component';
import { SanFranciscoComponent } from './san-francisco/san-francisco.component';
import { SydneyComponent } from './sydney/sydney.component';
import { SeattleComponent } from './seattle/seattle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarouselComponent,
    CitiesComponent,
    LondonComponent,
    SanFranciscoComponent,
    SydneyComponent,
    SeattleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
