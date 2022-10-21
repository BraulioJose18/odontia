import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMeasurementUnitComponent } from './pages/list-measurement-unit/list-measurement-unit.component';
import { FormMeasurementUnitComponent } from './pages/form-measurement-unit/form-measurement-unit.component';
import {MeasurementUnitRoutingModule} from "./measurement-unit-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeMeasurementUnitComponent } from './pages/home-measurement-unit/home-measurement-unit.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListMeasurementUnitComponent,
    FormMeasurementUnitComponent,
    HomeMeasurementUnitComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MeasurementUnitRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormMeasurementUnitComponent
  ]
})
export class MeasurementUnitModule { }
