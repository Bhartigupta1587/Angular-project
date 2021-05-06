import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LondonComponent} from "./london/london.component";
import {SanFranciscoComponent} from "./san-francisco/san-francisco.component";
import {SeattleComponent} from "./seattle/seattle.component";
import {SydneyComponent} from "./sydney/sydney.component";


@NgModule({
  declarations: [
    LondonComponent,
    SanFranciscoComponent,
    SeattleComponent,
    SydneyComponent
  ],
  imports: [
    CommonModule
  ] ,
  exports: [
    LondonComponent,
    SanFranciscoComponent,
    SeattleComponent,
    SydneyComponent
  ]
})
export class DestinationsModule { }
